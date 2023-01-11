/*
ex11: print every item on the list
Take the list you made in the last exercise. Now, use a for loop to print every item.

understanding
using the loop variable i.e. i to access the index
using length property to terminate the loop
using console.log() function call with different arguments from array!

*/
var list = ["Tomato", "Parle-G", "Colget", "Sugar", "Salt"];

for(let i = 0; i < list.length; i++){
  console.log(list[i]);
}