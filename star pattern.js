/*
homework: star pattern
challenge
a program to take input number from user and print stars like this. The below pattern will be printed when the user enters 5.

*
**
***
****
*****

BONUS (optional): Can you print this inverted? Like 5 stars > 4 stars > 3...?

understanding
double loop: HINT
struggling to form programs when you don't know-how
looking around the internet to understand the logic

*/

var readlineSync = require("readline-sync");
var userInput = readlineSync.questionInt("How many star do you want to print? ");

console.log(userInput + " star");
var star = "";
for(var i = 0; i <= userInput; i++){
  for(var j = 0; j < i; j++){
    star += "* ";
  }
    star += "\n";
}
console.log(star);