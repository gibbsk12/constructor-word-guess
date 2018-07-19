var Letter = require("./Letter")

var Word = function(word){
    this.objectArray = [];
    this.displayArray = [];
    for (var i = 0; i <word.length; i++){
        this.objectArray.push(new Letter(word.charAt(i)))
    };
    this.print = function(){
        this.displayArray = [];
        for (var i = 0; i < this.objectArray.length; i++){
            this.displayArray.push(this.objectArray[i].displayLetter())
        }
        console.log(this.displayArray.join(" "));
    };
    this.testLetter = function(x){
        for (var i = 0; i < this.objectArray.length; i++){
            this.objectArray[i].checkLetter(x);
        }
    };
    this.noUnderscore = function(){
        this.displayArray.every(this.didYouWin)
    };
    this.didYouWin = function(letter, index, array){
        return letter != "_";
    }

}
module.exports = Word;