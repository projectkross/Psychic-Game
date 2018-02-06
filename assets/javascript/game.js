var Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    
    var guessesArray = [];
    
    var userGuess = null;
    
    var letterToBeGuessed = Letters[Math.floor(Math.random() * Letters.length)];
    

    
    document.onkeyup = function(event) {

      
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

      
      if (guessesArray.indexOf(userGuess) < 0 && Letters.indexOf(userGuess) >= 0) {
        guessesArray[guessesArray.length]=userGuess;
        guessesLeft--;
      }

      if (letterToBeGuessed == userGuess) {
        wins++;
        console.log("You won!");
        guessesLeft = 9;
        guessesArray = [];
        letterToBeGuessed = Letters[Math.floor(Math.random() * Letters.length)];
      }

      
      if (guessesLeft == 0) {
        losses++;
        guessesLeft = 9;
        guessesArray = [];
        letterToBeGuessed = Letters[Math.floor(Math.random() * Letters.length)];
      }

      var html =
        "<p>Guess the Letter I'm Thinking</p>" + 
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" + 
        "<p>Guesses Left: " + guessesLeft + "</p>" + 
        "<p>Your guesses so far: " + guessesArray + "</p>";

      
      document.querySelector("#game").innerHTML = html;

    }
