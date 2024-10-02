"use strict";
// give the type
let a = 5;
console.log(a);
let k = (a, b) => {
    return a + b;
};
let ans = k(2, "john");
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
// can drive or not
function isLegal(age) {
    return age >= 18 ? true : false;
}
const islegalAns = isLegal(20);
console.log(islegalAns);
// using cb the return would be : ()=> void  expect none args and the return type is void
function runAfter1s(name, fn) {
    setTimeout(() => fn(name), 1000); // Use an arrow function to pass the name
}
runAfter1s("shivam", function (name) {
    console.log(`hello ${name}`);
});
