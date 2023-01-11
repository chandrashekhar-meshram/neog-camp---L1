// end game
var readlineSync = require("readline-sync");

var score = 0;
function play(question, answer){
  var userInput = readlineSync.question(question);
  if(userInput === answer){
    console.log("Right !");
    score++;
  } else {
    console.log("wrong !")
  }
  console.log("Your current score - ", score);
}

var questions = [
  {
    question: "Do you know my name ? ",
    answer: "chandrashekhar"
  },
  {
    question: "Do you know my city name ? ",
    answer: "gondia"
  }
];

for(let i = 0; i < questions.length; i++){
  play(questions[i].question, questions[i].answer);
}