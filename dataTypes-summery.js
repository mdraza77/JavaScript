// primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 10;
const scoreVal = 10.5;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);
console.log(id == anotherId);

const bigNumber = 321654987321654987n;

// Reference (Non primitive)
// Array, Objects, Functions

const heros =  ["Raza", "Aman", "Hassan"];
let myObj = {
    name: "Md Raza",
    age: 19
}

const myFunction = function() {
    console.log("Hello, Raza");
}

// console.log(typeof bigNumbers);
// console.log(typeof outsideTemp);
// console.log(typeof heros);
// console.log(typeof myObj);


// +++++++++++++++++++++++++++++++++ //

// Stack (Primitive), Heap (Non-Primitive)
let Name = "Aman Raja";
let myname = Name;
myname = "Md Raza";
// console.log(Name);
// console.log(myname);

let userOne = {
    name: "Md Raza",
    mail: "mdraza@gmail.com",
    age: 19,
    gender: "male"
}

let userTwo = userOne;
userTwo.mail = "aman@gmail.com";
console.log(userOne.mail);
console.log(userTwo.mail);