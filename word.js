var Letter = require("./letter");
var colors = require("colors");


var Word = function (word) {
    this.objectArray = [];
    this.displayArray = [];
    this.underscores = 0;
    this.guessesRemaining = 10;
    for (var i = 0; i < word.length; i++) {
        this.objectArray.push(new Letter(word.charAt(i)))
    };
    this.print = function () {
        this.displayArray = [];
        this.underscores = 0;
        for (var i = 0; i < this.objectArray.length; i++) {
            this.displayArray.push(this.objectArray[i].displayLetter());
            if (this.objectArray[i].displayLetter() == "_") {
                this.underscores++;
            }
        }
        console.log(this.displayArray.join(" "));
    };
    this.testLetter = function (x) {
        var found = false;
        for (var i = 0; i < this.objectArray.length; i++) {
            this.objectArray[i].checkLetter(x);
        }
        for (var i = 0; i < this.objectArray.length; i++) {
            if (this.objectArray[i].letter == x) {
                found = true;
                break;
            };
        };
        if (found === false) {
            this.guessesRemaining--;
            console.log(`\nINCORRECT\n`.red)
        } else if (found === true) {
            console.log(`\nCORRECT\n`.green)
        }
    };
    this.noUnderscore = function () {
        if (this.displayArray.every(this.didYouWin)) {
            console.log(`YOU'VE WON`.green);
        } else {
            if (this.guessesRemaining > 0) {
            console.log(`Guess again!`);
            } 
        }
    };
    this.didYouWin = function (letter, index, array) {
        return letter != "_";
    };
}

module.exports = Word;
