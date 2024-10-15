/*const Sentiment = require("sentiment");
const sentiment = new Sentiment();
const result = sentiment.analyze("dogs are cool.");
console.log(result); // Score: -2, Comparative: -0.666*/

console.log("Hello World");
function sum(a, b) {
  console.log(a + b);
}
sum(5, 1);
//this function returns the added sum
function add(a, b) {
  return a + b;
}
//this function returns the subtracted sum
function subtract(a, b) {
  return a - b;
}
//this function returns the multiplied sum
function multiply(a, b) {
  return a * b;
}
//this function returns the divided sum
function divide(a, b) {
  return a / b;
}

function helloWorld(name) {
  return `Hello ${name}`;
}
console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));

console.log(helloWorld("John Doe"));
