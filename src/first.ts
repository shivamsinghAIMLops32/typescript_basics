// give the type
let a: number = 5;
console.log(a);

let k = (a: number, b: string): string => {
  return a + b;
};
let ans = k(2, "john");
console.log(ans);

// how to pass to function
function greet(name: string): string {
  return `hello ${name}`;
}

const greeting = greet("shivam");
console.log(greeting);

// sum function
function sum(a: number, b: number): number {
  return a + b;
}
const sumAns = sum(2, 6);
console.log(sumAns);

// can drive or not
function isLegal(age: number): boolean {
  return age >= 18 ? true : false;
}

const islegalAns: boolean = isLegal(20);
console.log(islegalAns);

// using cb the return would be : ()=> void  expect none args and the return type is void

function runAfter1s(name: string, fn: (name: string) => void) {
  setTimeout(() => fn(name), 1000); // Use an arrow function to pass the name
}

runAfter1s("shivam", function (name: string) {
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
    console.log(
      `Student: ${this.name}, Roll No: ${this.rollNo}, Fees Due: ${this.feesDue}`
    );
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

// types : combine multiple types and also merge multiple types

function gretting(id: number | string) {
  console.log(`${id} is id of user`);
}
gretting("shi");
gretting(6);

// or bettter way is to use type
type GreetArg = string | number | boolean;

function greeeting(id: GreetArg): string {
  return `gretting is done for ${id}`;
}
const val = greeeting(6);

// intersection

type Emmployee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

// third type to hold both
type TeamLead = Emmployee & Manager;

const teamLead: TeamLead = {
  name: "shivam",
  startDate: new Date(),
  department: "aiml",
};

// arrays
function maxEle(arr: number[]): number {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
const arr = [1, 2, 3];
const answer = maxEle(arr);

// given a list of user ,filter out the users that are legal(>=18)
interface Userr {
  firstName: string;
  lastName: string;
  age: number;
}

function islegalDrive(userObj: Userr[]): string[] {
  let ans: string[] = []; // Initialize ans as an empty array
  for (let i = 0; i < userObj.length; i++) {
    if (userObj[i].age >= 18) {
      // Access age correctly
      ans.push(`${userObj[i].firstName} ${userObj[i].lastName}`);
    }
  }
  return ans; // Return the list of eligible drivers
}

console.log(
  islegalDrive([
    { firstName: "shiva", lastName: "singa", age: 19 },
    { firstName: "raj", lastName: "roy", age: 11 },
  ])
);

// one more
interface Userrr {
  firstName: string;
  lastName: string;
  age: number;
}

function islegalDrive2(userObj: Userrr[]): string[] {
  // Filter users who are 18 or older
  const eligibleUsers = userObj.filter((val) => val.age >= 18);

  // Map eligible users to their full names
  const ans = eligibleUsers.map((user) => `${user.firstName} ${user.lastName}`);

  return ans; // Return the list of eligible drivers
}

// Test the function
console.log(
  islegalDrive2([
    { firstName: "shiva", lastName: "singa", age: 19 },
    { firstName: "raj", lastName: "roy", age: 14},
    { firstName: "shila", lastName: "deshmukh", age: 27 },
  ])
);


// enum : - defines set of named constants
enum Direction {
    Up,
    Down,
    Left,
    Right
}

// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right
// }
// Using the enum
let move: Direction = Direction.Up;

console.log(move); // Output: 0 (the index of the 'Up' constant)


// enum

enum Genders {
    male,
    female,
    others
}

interface Buyer {
    name: string;
    age: number;
    gender: Genders;
}

function isOthers(obj: Buyer[]): string[] {
    // Filter buyers with gender as "others"
    const filteredBuyers: Buyer[] = obj.filter(value => value.gender === Genders.others);
    
    // Map the filtered buyers to the desired string format
    const ansArray: string[] = filteredBuyers.map(val => 
        `${val.name} of age ${val.age} is ${Genders[val.gender]} so not allowed or eligible to buy`
    );
    
    return ansArray; // Return the mapped array
}

const buyers: Buyer[] = [
    { name: "Alice", age: 30, gender: Genders.female },
    { name: "Bob", age: 25, gender: Genders.male },
    { name: "Charlie", age: 22, gender: Genders.others }
];

console.log(isOthers(buyers)); 


// generics IMP
function identity<T>(arg:T):T{
 return arg;
}

const output1 = identity<string>("shivam");

// 
type argType = number | string;
function firstEl(arr: argType):argType{
  return arr;
}

console.log(firstEl("shivam"));
console.log(firstEl(8));

// make it better
function firstEl2<T>(arr: T[]): T {
    return arr[0];
}

let arr2 = ["brock", "roliins"];

// Call the function with the correct type
let finalAns = firstEl2(arr2); // TypeScript infers the type as string

console.log(finalAns.toUpperCase()); // Output: "brock"
