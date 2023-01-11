/*
ex12: club info about a superhero together
exercise
Create two objects and put information about two superheros: superman and batman. Get familiarity with the syntax. Read and understand what's written in understanding section.

syntax
{
  // notice the opening bracket
  key: value;
} // notice the closing bracket
understanding
how objects work
the fact that objects mimic real life objects in programming and thus group properties of one object in one. Think of defining a car in programming language, what would be the properties of a car?
accessing values using keys
the values inside an object are called object's properties
notice the dot . notation used to access the properties? One thing to notice here is that console is an object on which log() is a property. And yes, functions too can be a property of object.
another fact, when functions are properties of an object, they are called methods in programming

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

console.log("superMan power ", superMan.power, "batman power ", batMan.power);