//this is my JS file
button onClick="document.getElementById('d3').style.display='block'"></button>
$('#start').(click(function() {
  $('body').css("background", "url('images/bg.jpg')");
)};

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
    case "Me":
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
// QUESTION 2
if (Q2ready===1) {
    var Q2 = prompt("What is greater than God,more evil than the devil,the poor have it,the rich need it,and if you eat it, you'll die?").toUpperCase();

var q3ready=0;

  switch(Q2) {
//ANSWERS 
    case "NOTHING":
        alert("Excellent You Made It");
        Q3ready=1;
        var Life = Life + 1;
        alert ("Your Life is " + Life);
        break;
    default:
//LIFELINE/MATHQUESTION
         lifelineCheck();
         lifeline--;
         alert("OH NO!! Wrong Answer - Now you have to lose " + Life);
         alert("Answer this math problem to skip the question, if you fail game over"); 
        var L1 = prompt("0-10=?");
          switch(L1) {
            case '-10':
              Q3ready=1;
              alert("Amazing you saved yourself! You get to move to Question 3");
              break;
            default:
              alert("Sorry you died bye bye!");
              break;
          }
        break;
    }
}
// QUESTION 3
if (Q3ready===1) {
    var Q3 = prompt("Who makes it, has no need of it.Who buys it, has no use for it. Who uses it can neither see nor feel it. What is it?").toUpperCase();

var q4ready=0;

  switch(Q3) {
      //ANSWERS 
    case "COFFIN":
        alert("Excellent you made it");
        Q4ready=1;
        var Life = Life + 100;
        alert ("You Life is $" + Life);
        break;
    default:
      //LIFELINE/MATHQUESTION
        lifelineCheck();
        lifeline--;
        alert("OH NO!! Wrong Answer - Now you have lose a Life " + Life);
        alert("Answer this math problem to save yourself, if you fail game over"); 
        var L1 = prompt("-1+1=?");
          switch(L1) {
            case '0':
              Q4ready=1;
              alert("Amazing you saved yourself, but you get to move to Question 4");
              break;
            default:
              alert("Sorry you died. Bye bye!");
              break;
          }
        break;
    }
}                                             
if (Q4ready===1) {
    var Q4 = prompt("Forward I am heavy, but backward I am not. What am I?").toUpperCase();

var q5ready=0;

  switch(Q4) {
      //ANSWERS 
    case "TON":
        alert("Excellent you made pass");
        Q5ready=1;
        var Life = Life + 1;
        alert ("You Life is" + Life);
        break;
    default:
      //LIFELINE/MATHQUESTION
        Life();
        Lifeu--;
        alert("OH NO!! Wrong Answer - Now you have to lose a Life" + Life);
        alert("Answer this math problem to skip the question, if you fail game over"); 
        var L1 = prompt("56+82=?");
          switch(L1) {
            case '138':
              Q5ready=1;
              alert("Amazing you saved yourself, but you get to move to Question 5");
              break;
            default:
              alert("Sorry you made $"+ moneyearned +" bye bye!");
              break;
          }
        break;
    }
}
// QUESTION 5
if (Q5ready===1) {
    var Q20 = prompt("What invention lets you look right through a wall?").toUpperCase();

var q1ready=0;

  switch(Q5) {
      //ANSWERS 
    case "WINDOW":
        alert("Excellent you made $100");
        Q21ready=1;
        var moneyearned = moneyearned + 100;
        alert ("You bank balance is $" + moneyearned);
        break;
    default:
      //LIFELINE/MATHQUESTION
        lifelineCheck();
        lifeline--;
        alert("OH NO!! Wrong Answer - Now you have to try to use a lifeline " + lifeline); 
        alert("Answer this math problem to skip the question, if you fail you lose"); 
        var L1 = prompt("49+51=?");
          switch(L1) {
            case '100':
              Q21ready=1;
              alert("Amazing you saved yourself");
              break;
            default:
              alert("Sorry Game OVER" bye bye!");
              break;
          }
        break;
    }
}
// GAMEOVER
if (Q21ready===1) {
   alert("YOU REACHED THE END OF THE GAME!!!"); 
   alert("You Win The Game. Thank You For Playing Riddler's Riddle.");
}  
 