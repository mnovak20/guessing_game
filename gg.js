







$(document).ready(function(){
    var numberOfGuess = 10;
    var answer = Math.floor((Math.random() * 100) + 1);
    $("#guessRemain").text("You have " + numberOfGuess + " guesses remaining.");
    $("#points").hide();
    //click on reset button to reset number of guesses and get new random number
    $("#reset").click(function(){
      answer = Math.floor((Math.random() * 100) + 1);
      numberOfGuess = 10;
      $("#guessRemain").text("You have " + numberOfGuess + " guesses remaining.");
      $("#guess1").val("");
      $("h2").hide();
      $("#points").hide();
    });


    $("#start").click(function(){
     var guess = $("#guess1").val();
     $("h2").show();
     numberOfGuess--;
     //show number of guesses 
     $("#guessRemain").text("You have " + numberOfGuess + " guesses remaining.");
     var diff;
     if(numberOfGuess>0){
       if (guess > 0 && guess <= 100){
          diff = answer - guess;
            if(Math.abs(answer - guess)>= 50){
                  if(diff > 0){
                   $("h2").text("You guessed "+ guess +". Arctic cold, guess higher.").attr("id","arctic");
                  }
                  else{
                   $("h2").text("You guessed "+ guess +". Arctic cold, guess lower.").attr("id","arctic");
                  }
            }
            else if (Math.abs(answer - guess)>=30 && Math.abs(answer - guess) < 50){
                  if(diff > 0){
                   $("h2").text("You guessed "+ guess +". Pretty cold. Guess higher.").attr("id","cold"); 
                  }
                  else if(diff <0){
                   $("h2").text("You guessed "+ guess +". Pretty cold. Guess lower.").attr("id","cold"); 
                  }
            }
            else if (Math.abs(answer - guess)>=15 && Math.abs(answer - guess) < 30){
                if(diff > 0){
                    $("h2").text("You guessed "+ guess +". Warm but not too much. Guess higher.").attr("id","warm");
                }
                else if(diff <0){
                    $("h2").text("You guessed "+ guess +". Warm but not too much. Guess lower.").attr("id","warm");
                }
            }
            else if (Math.abs(answer - guess)>=5 && Math.abs(answer - guess) < 15){
                if(diff > 0){
                    $("h2").text("You guessed "+ guess +". Very warm. Guess higher.").attr("id","warmer");
                }
                else if(diff <0){
                    $("h2").text("You guessed "+ guess +". Very warm. Guess lower.").attr("id","warmer");
                }
            }
            else if (Math.abs(answer - guess)>=1 && Math.abs(answer - guess) < 5){
                if(diff > 0){
                    $("h2").text("You guessed "+ guess +". Hot, like really hot....Guess higher.").attr("id","hot");
                }
                else if(diff <0){
                    $("h2").text("You guessed "+ guess +". Hot, like really hot....Guess lower.").attr("id","hot");
                }
            }
            else if (Math.abs(answer - guess) === 0){
               $("h2").text("You answered correctly!!!!").attr("id","correct");
               $("#guessRemain").text("If you'd like to play again, please press the reset button.");
               $("#points").show();

             }
        }
        else {
          $("h2").text("I need a number between 1 and 100").attr("id","correct");
         }

   }
   else{
    $("#guessRemain").text("You have exhausted the number of guesses. Please press the reset button.");
   }
     
    });

   $("#revealAnswer").click(function(){
   //$("h2").hide();
   $("#guessRemain").text("Giving up already? The answer is " + answer + ".");
   });
});