//this is my JS file
$(document).ready(function() {

  $("#start").click(function() {
    $("#start").hide();
  });

  // ask for your name
var name = prompt("What's your name");
//The question you find you will go ahead but if you anwser it wrong you would die
var Life=1
function LifeCheck() {
// this function checks the lifeline and if they have 0 it will brain them to the end screen!
  if (Life===0) {
   alert("YOU HAVE LOST THE GAME!");
   alert("Great Job making so far in this question. Your score will be recorded! Better Luck Next Time!");
   throw new Error("GAME OVER");
  }
   
}



});