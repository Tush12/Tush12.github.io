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

  alert("Welcome "+name +" You have been selected in Riddler's Riddle! Answer the following questions and you may pass! All the answers are 1 word answers!");

// QUESTION 1
var Q1 = prompt("Brothers and sisters I have none but this man's father is my father's son. Who is the man?" ).toUpperCase();

var q2ready=0;

  switch(Q1) {
// ANSWERS also have the add the cash together and have the moneyearned and bank balance
    case "SON":
        alert("Excellent you may pass");
        Q2ready=1;
        var Life = Life + 1;
        alert ("You bank balance is $" + Life);
        break;
    default:
// LIFELINE/MATHQUESTION for the lifeline I used the function where they can find out if they run out of lifeline and will bring them to the end screen!
// all the follows are in the same format 
        Life();
        alert("OH NO!! Wrong Answer - Game Over ");
        alert("Answer this math problem to skip the question, if you fail game over"); 
        var L1 = prompt("9+10=?");
          switch(L1) {
            case '19':
              Q2ready=1;
              alert("Amazing you saved yourself, but you get to move to Question 2");
              break;
// this is to give them a goodbye after they get the math question wrong
            default:
              alert("Idiot Game Over!");
              break;
          }
        break;
    }









});