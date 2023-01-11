/*
ex07: function to add two numbers
Take two numbers and add them. Put this entire thing in a function add() and return the result

syntax
function functionName(parameterOne, parameterTwo) {
  // processing
  return outputValue;
}
understand
a function is a repeating piece of the PROCESSING while INPUT and OUTPUT changes
Note the difference between parameters and arguments:
Function parameters are the names listed in the function's definition.
Function arguments are the real values passed to the function.
*/

function add(num1, num2){
  var num3 = num1 + num2;
  return num3;
}
console.log(add(2,5));
console.log(add(8,5));