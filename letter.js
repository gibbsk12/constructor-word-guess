var Letter = function (x) {
    this.letter = x;
    this.hasBeenGuessed = false;
    this.displayLetter = function () {
        if (this.hasBeenGuessed === true){
            return this.letter.toUpperCase();
        }else if (this.hasBeenGuessed === false){
            return '_';
        }
    };
    this.checkLetter = function (x) {
        if (x == this.letter) {
            this.hasBeenGuessed = true;
        }
    }
}

module.exports = Letter;