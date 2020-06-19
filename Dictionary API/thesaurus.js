//API Key
let mythe = config.MY_THE;

//HTML Elements
let input = document.getElementById('inputVal'),
  submit = document.getElementById('submitBtn'),
  def1 = document.getElementById('def1'),
  def2 = document.getElementById('def2'),
  def3 = document.getElementById('def3'),
  grammar = document.getElementById('grammar'),
  definition = document.querySelector('.definition'),
  syn = document.getElementById('syn'),
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


  //fetching data from api
  fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${mythe}`)
    .then(response => response.json())
    .then(data => {

      //logs data as array
      console.log(data)
      
      //Display
      message.style.display = 'none';
      resultWord.style.display = 'block';
      resultWord.innerHTML = input.value.toUpperCase();
      def1.innerHTML = data[0].meta.syns[0][0];
      def2.innerHTML = data[0].meta.syns[0][1];
      def3.innerHTML = data[0].meta.syns[0][2];
      definition.innerHTML = data[0].shortdef[0];
      grammar.innerHTML = data[0].fl;
      syn.style.display = 'block';
      
    
    })

    .catch(error => console.error(error))
}