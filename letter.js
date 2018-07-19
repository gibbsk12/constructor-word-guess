var Letter = function(userLetter){
    this.character = userLetter;
    this.shown = false; 
    this.displayLetter = function(){
        if (this.shown === true){
            return this.character;
        } else {
            return " _ "
        }
    };
    this.checkLetter = function(x){
        if (this.Letter==x){
            this.shown = true; 
        }
    };
};
module.exports = Letter;