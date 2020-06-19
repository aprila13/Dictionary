//API Key
let mykey = config.MY_KEY;

//HTML Elements
let input = document.getElementById('inputVal'),
  submit = document.getElementById('submitBtn'),
  def1 = document.getElementById('def1'),
  def2 = document.getElementById('def2'),
  def3 = document.getElementById('def3'),
  grammar = document.getElementById('grammar'),
  pronounce = document.getElementById('pronounce'),
  audio = document.getElementById('audio'),
  resultWord = document.getElementById('resultWord'),
  message = document.getElementById('message'),
  close = document.querySelector('.close');

//Event Listener for the submit button
submit.addEventListener('click', showWord);

//Event listener to clear input field
close.addEventListener('click', removeWord);

//Function to clear input field
function removeWord() {
  input.value = '';
}



//Function to fetch data
function showWord() {

  //input value
  let word = input.value;

  //first letter of input value
  let letter = word[0];

  

  //fetching data from api
  fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${mykey}`)
    .then(response => response.json())
    .then(data => {

      //logs data as array
      console.log(data)


      //displayed
      message.style.display = 'none';
      resultWord.style.display = 'block';
      resultWord.innerHTML = input.value.toUpperCase();
      def1.innerHTML = data[0].shortdef[0];
      def2.innerHTML = data[1].shortdef[0];
      def3.innerHTML = data[2].shortdef[0];
      grammar.innerHTML = data[0].fl;
      pronounce.innerHTML = `/ ${data[0].hwi.prs[0].mw} /`

      let sound = data[0].hwi.prs[0].sound.audio;
      console.log(sound)
      audio.style.visibility = 'visible';
      audio.src = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${letter}/${sound}.mp3`
    })

    .catch(error => console.error(error))
}







