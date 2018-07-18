var Word = require("./Word.js");
var prompt = require('prompt');

//World Cup Qualifiers 
var wordList = ["Russia", "Belgium", "Germany", "Iceland", "England", "Spain", "Poland", "Serbia", "France", "Portugal", "Switzerland", "Croatia", "Sweden", "Denmark", "Iran", "South Korea", "Japan", "Saudi Arabia", "Australia", "Nigeria", "Egypt", "Senegal", "Tunisia", "Morocco", "Mexico", "Costa Rica", "Panama", "Brazil", "Uruguary", "Argentina", "Colombia", "Peru"]

console.log("Welcome! Let's play hangman!");
console.log("Each answer will be the name of a 2018 World Cup Qualifier");
console.log("Bonne chance! Good luck! Alles Gute!");
console.log("-----------------------------");
prompt.start();

prompt.get([{
  name: 'letter',
  description: 'What letter would you like to guess?',  
  type: 'string',
  required: true
}], function (err, result) {
  console.log('userGuess: ' + result.letter);
});

