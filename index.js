// ex02: read the name of your user

var readlineSync = require("readline-sync");

var userName = readlineSync.question("What is your name? ");
console.log("Hi " + userName +" !");
