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


// interfaces : it is widely used in ts

interface StudentFace {
    name: string;
    rollNo: number;
    feesDue: boolean;

    info(): void;
    checkFeesStatus(): string;
}

class Students implements StudentFace {
    name: string;
    rollNo: number;
    feesDue: boolean;

    constructor(naam: string, rno: number, dediya: boolean) {
        this.name = naam;
        this.rollNo = rno;
        this.feesDue = dediya;
    }
    
    info(): void {
        console.log(`Student: ${this.name}, Roll No: ${this.rollNo}, Fees Due: ${this.feesDue}`);
    }

    checkFeesStatus(): string {
        return this.feesDue ? "Fees are due." : "No fees due.";
    }
}

const s1 = new Students("Shivam", 55, true);
const s2 = new Students("John", 32, false);

s1.info();
console.log(s1.checkFeesStatus());

s2.info();
console.log(s2.checkFeesStatus());
