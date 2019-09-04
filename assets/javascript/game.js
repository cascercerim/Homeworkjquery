// X create randomly generated number between 19-120 to guess  
// Xconnect crystal buttons numbers randomly generated between 1-12 to guess 
// Xconnect random math generator to buttons that changes numbers everytime
// Xmake sure all numbers have a random buttom number thats different from each one 
// Xwhen you match score you'll get reading "You win!" or "You lose!" in score-card 
// Xin score-card make sure score goes in wins or losses 
// Xmake sure score is reset to different number for new game 
// Xmake sure crystals are reset to different numbers also

//running the game
$(document).ready(function () {

    //Random number generator for crystal 
    var crystalNumber = Math.floor(Math.random() * 101) + 19;


    // Number is showing in Number to guess box 
    $("#number-to-guess").text(crystalNumber);

    // Starts game with 0's and random number for crystal box 
    var playerGuess = 0;
    var win = 0;
    var losses = 0;

    // Sets the place for scores 
    $(".wins").text(win);
    $(".lose").text(losses);
    


    // generating random number for crystals between 1-12
    var button1 = Math.floor(Math.random() * 11) + 1;
    var button2 = Math.floor(Math.random() * 11) + 1;
    var button3 = Math.floor(Math.random() * 11) + 1;
    var button4 = Math.floor(Math.random() * 11) + 1;
   

    // Reset Function
    function restart(){

         crystalNumber = Math.floor(Math.random() * 101) + 19;
         $("#number-to-guess").text(crystalNumber);

         // win = 0;
         // lose = 0;
         playerGuess = 0;

         $("#my-total").text(playerGuess);
        
         button1 = Math.floor(Math.random() * 11) + 1;
         button2 = Math.floor(Math.random() * 11) + 1;
         button3 = Math.floor(Math.random() * 11) + 1;
         button4 = Math.floor(Math.random() * 11) + 1;

    
    }


    function youWon() {
         $("#gameStatus").html("You won!");
         win++;
         $(".wins").text(win);
         restart();
    }
    
    function youLost() {
         $("#gameStatus").html("You lost!");
         losses++;
         $(".lose").text(losses);
         restart();
    }

     function startGame(){

     }

//button 1 on click event and adding button together per multiple clicks 
    $(".button1").on("click", function () {
          $("#my-total").text(button1);
         playerGuess = playerGuess + button1;
          $("#my-total").text(playerGuess);
          console.log("button1");

         
         if (playerGuess === crystalNumber) {
              restart();
              console.log("restart");
              youWon();
              console.log("you won");
       
          }


          else if (playerGuess >= crystalNumber) {
              restart();
              console.log("restart");
              youLost();
              console.log("you lost");
          }
    });

//button 2 on click event and adding button together per multiple clicks 
      $(".button2").on("click", function () {
         $("#my-total").text(button2);
         playerGuess = playerGuess + button2;
         $("#my-total").text(playerGuess);
         console.log("button2");

         if (playerGuess === crystalNumber) {
              restart();
              console.log("restart");
              youWon();
              console.log("you won");
              
                
              }
         else if (playerGuess >= crystalNumber) {
              restart();
              console.log("restart");
              youLost();
              console.log("you lost");
            }
         
    });

 //button 3 on click event and adding button together per multiple clicks 
           $(".button3").on("click", function () {
              $("#my-total").text(button3);
              playerGuess = playerGuess + button3;
              $("#my-total").text(playerGuess);
              console.log("button3");

         if (playerGuess === crystalNumber) {
              restart();
              console.log("restart");
              youWon();
              console.log("you won");                

                      }

         else if (playerGuess >= crystalNumber) {
              restart();
              console.log("restart");
              youLost();
              console.log("you lost");

              }
                });


//button 4 on click event and adding button together per multiple clicks 
           $(".button4").on("click", function () {
            $("#my-total").html(button4);
            playerGuess = playerGuess + button4;
               $("#my-total").text(playerGuess);
               console.log("button4");

               
         if (playerGuess === crystalNumber) {
              restart();
              console.log("restart");
              youWon();
              console.log("you won");

                      }

         else if (playerGuess >= crystalNumber) {
              restart();
              console.log("restart");
              youLost();
              console.log("you lost");

         }
    
     });
      startGame()
    });

                  