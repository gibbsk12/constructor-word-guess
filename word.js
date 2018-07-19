var Letter = require("./Letter")

var Word = function (word) {
    this.objectArray = [];
    this.displayArray = [];
    this.underscores = 0;
    this.guessesLeft = 10;
    for (var i = 0; i < word.length; i++) {
        this.objectArray.push(new Letter(word.charAt(i)))
    };
    this.print = function () {
        this.displayArray = [];
        for (var i = 0; i < this.objectArray.length; i++) {
            this.displayArray.push(this.objectArray[i].displayLetter())
            if (this.arr[j].displayLetter() == "_") {
                this.underscores++;
            }
        }
        console.log(this.displayArray.join(" "));
    };
    this.testLetter = function (x) {
        for (var i = 0; i < this.objectArray.length; i++) {
            this.objectArray[i].checkLetter(x);
        };
        for (var m = 0; m < this.arr.length; m++) {
            if (this.arr[m].letter == x) {
                found = true;
                break;
            };
        };
        if (found === false) {
            this.guesses--;
            console.log(`Incorrect!`)
        } else if (found === true) {
            console.log(`Correct!`)
        }
    };
    this.noUnderscore = function () {
        if (this.arr2.every(this.didYouWin)) {
            console.log(`You win!`);
        } else {
            if (this.guesses > 0) {
                console.log(`Guess again!`);
            }
        }
    };
    this.didYouWin = function (letter, index, array) {
        return letter != "_";
    };

}
module.exports = Word;