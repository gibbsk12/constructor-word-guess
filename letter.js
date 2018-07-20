var Letter = function (x) {
    this.letter = x;
    this.hasBeenGuessed = false;
    this.displayLetter = function () {
        switch (this.hasBeenGuessed) {
            case true:
                return this.letter;
            case false:
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