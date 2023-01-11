/*
ex08: function to check the answer
challenge
Your function should take a question and the right answer.
Ask your user to answer the question.
check the answer and increment score (global variable)
tell your user whether the answer was correct or not
understand
A function can do multiple things
sometimes, the output can be a change in the global variable
looking back
Up until now, we have a function() which is kind of a mini-program to do everything which we need to do.

If you look back now, console.log(), readlineSync() are all just functions isn't it?

What we need now is a way to run this mini-program again and again. And each time with a different question/answer pair.

To do this we need to understand a few things.

*/

var readlineSync = require("readline-sync");


var score = 0;
function checkAnswer(question, answer){
  var userInput = readlineSync.question(question);
  console.log("answer = "+ userInput);
  if(userInput === answer){
    console.log("correct answer");
    score++;
  } else {
    console.log("wrong answer");
  }
  console.log("score = "+score);
}
console.log(checkAnswer("What is my name? ", "shekhar"));