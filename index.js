// end game
var readlineSync = require("readline-sync");

var score = 0;
function play(question, answer) {
  var userInput = readlineSync.question(question);
  if (userInput.toUpperCase() === answer.toUpperCase()) {
    console.log("Right !");
    score++;
  } else {
    console.log("wrong !")
  }
  console.log("Your current score is - ", score);
  console.log("-----------------------------");
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

for (let i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}
console.log("Thanks to play.....");
console.log("Your final score - ", score);