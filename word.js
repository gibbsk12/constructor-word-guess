var Letter = require("./Letter")

var Word = function(myWord){
    this.myWord = myWord;
    this.letters = [];
    this.underscores = [];
    this.splitWord = function(){
        this.letters = this.myWord.split("")
        numberOfUnderscores = this.letters.length;
        console.log(this.underscores.join(" "));
    }
    this.makeLetters = function(){
        for (var i = 0; i < this.letters.length; i++){
            this.letters[i] = new Letter (this.letters[i]);
            this.letters[i].displayLetter();
        }
    }
}

module.exports = Word;