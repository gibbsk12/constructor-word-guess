var Letter = function(userLetter){
    this.character = userLetter;
    this.shown = false; 
    this.displayLetter = function(){
        if (this.shown === true){
            return this.character;
        } else {
            return " _ "
        }
    }
}
exports.Letter = Letter;