var Word = require("./Word.js");
var prompt = require('prompt');

//World Cup Qualifiers 
var wordList = ["Russia", "Belgium", "Germany", "Iceland", "England", "Spain", "Poland", "Serbia", "France", "Portugal", "Switzerland", "Croatia", "Sweden", "Denmark", "Iran", "South Korea", "Japan", "Saudi Arabia", "Australia", "Nigeria", "Egypt", "Senegal", "Tunisia", "Morocco", "Mexico", "Costa Rica", "Panama", "Brazil", "Uruguary", "Argentina", "Colombia", "Peru"];
var randomWord;

console.log("Welcome! Let's play hangman!");
console.log("Each answer will be the name of a 2018 World Cup Qualifier");
console.log("Bonne chance! Good luck! Alles Gute!");
console.log("-----------------------------");
prompt.start();


function newGame() {
  randomWord = new Word(wordList[Math.floor(Math.random() * 32)]);
  randomWord.print();
  gamePlay();
};

function gamePlay() {
  if (randomWord.underscores > 0 && randomWord.guesses > 0) {
    prompt.get([{
      name: 'letter',
      description: 'What letter would you like to guess?',
      type: 'string',
      pattern: /^[a-zA-z]+$/,
      message: 'Guess must be a letter',
      required: true
    }], function (error, result) {
      if (!error) {
        randomWord.testLetter(result.letter);
        randomWord.print();
        console.log(`You have ${randomWord.guessesLeft} guesses remaining!`);
        randomWord.noUnderscore();
        stillPlaying();
      } else {
        console.log("There was an error...")
      }
    });
  } else if (randomWord.underscores > 0 && randomWord.guesses < 1) {
    console.log(`No guesses remain! Let's play a new game!`)
    newGame();
  } else if (randomWord.underscores < 1) {
    console.log(`Let's play a new game!`);
    newGame();
  }
};

newGame();

