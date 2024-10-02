"use strict";
// give the type
let a = 5;
console.log(a);
let k = (a, b) => {
    return a + b;
};
let ans = k(2, "shi");
console.log(ans);
// how to pass to function
function greet(name) {
    return (`hello ${name}`);
}
const greeting = greet("shivam");
console.log(greeting);
// sum function
function sum(a, b) {
    return a + b;
}
const sumAns = sum(2, 6);
console.log(sumAns);
