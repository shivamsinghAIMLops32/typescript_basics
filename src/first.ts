// give the type
let a :number = 5;
console.log(a);

let k =(a :number,b:string):string=>{
   return a+b;
}
let ans = k(2,"john");
console.log(ans);

// how to pass to function
function greet(name:string):string{
 return (`hello ${name}`);
}

const greeting = greet("shivam");
console.log(greeting);


// sum function
function sum(a:number,b:number):number{
    return a+b;
}
const sumAns = sum(2,6);
console.log(sumAns);

// can drive or not
function isLegal(age: number): boolean {
    return age >= 18 ? true : false;
}

const islegalAns :boolean = isLegal(20);
console.log(islegalAns);

// using cb the return would be : ()=> void  expect none args and the return type is void

function runAfter1s(name: string, fn: (name: string) => void) {
    setTimeout(() => fn(name), 1000); // Use an arrow function to pass the name
}

runAfter1s("shivam", function(name: string) {
    console.log(`hello ${name}`);
});

