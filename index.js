var Word = require("./word");
var prompt = require("prompt");
var colors = require("colors");
var randomWord;
var displayWord; 
var chosenWord; 
var words = ["russia", "belgium", "germany", "iceland", "england", "spain", "poland", "serbia", "france", "portugal", "switzerland", "croatia", "sweden", "denmark", "iran", "southkorea", "japan", "saudiarabia", "australia", "nigeria", "egypt", "senegal", "tunisia", "morocco", "mexico", "costarica", "panama", "brazil", "uruguary", "argentina", "colombia", "peru"];
var schema = {
  properties: {
      guess: {
          description: "Guess a letter:",    
          type: "string",
          pattern: /^[a-zA-Z]+$/,
          message: "Guess must be a letter",
          required: true
      }
  }
};

console.log("Welcome! Let's play hangman!");
console.log(`Each answer will be the name of a `+`2018 World Cup Qualifier`.america +`.`);
console.log("Bonne chance! Good luck! Alles Gute!");

prompt.start();

function newGame() {
    console.log(`\n`)
    chosenWord = words[Math.floor(Math.random() * 32)]
    randomWord = new Word(chosenWord);
    displayWord = chosenWord.toUpperCase();
    randomWord.print();
    gamePlay();
};

function gamePlay() {
    if (randomWord.underscores > 0 && randomWord.guessesRemaining > 0) {
        prompt.get(schema, function (err, result) {
            if (!err) {
                randomWord.testLetter(result.guess);
                randomWord.print();
                console.log(`There are ${randomWord.guessesRemaining} guesses remaining.`);
                randomWord.noUnderscore();
                gamePlay();
            }
        });
    } else if (randomWord.underscores > 0 && randomWord.guessesRemaining < 1) {
        console.log(`You've lost. `.red +`The country was `+`${displayWord}.`.america);
        console.log(`\nNew Game!`);
        newGame();
    } else if (randomWord.underscores < 1) {
        console.log(`\nNew Game!`);
        newGame();
    }
};

newGame();