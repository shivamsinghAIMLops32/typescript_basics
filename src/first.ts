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

//