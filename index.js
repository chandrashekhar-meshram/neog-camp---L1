/*
ex13: put a list of questions together
// hint: there's an error in these objects
// if you copy/paste blindly it won't work
questionOne = {
  question: "Who is my favorite superhero?"
  answer: "Dhruv"
}

questionTwo = {
  question: "Which is my favorite sad song?"
  answer: "Channa Meraya"
}
*/

var superMan = {
  power: 1000,
  skill: 900,
  fly: true
}

var batMan = {
  power: 500,
  skill: 1000,
  fly: false
}
let heros = [superMan, batMan];

for (let i = 0; i < heros.length; i++) {
    console.log(heros[i].power);
    console.log(heros[i].skill);
}

// console.log("superMan power ", superMan.power, "batman power ", batMan.power);