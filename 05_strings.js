const fname = "Md";
const lname = " Raza";
const age = 19;
// console.log(fname + lname + age);

// Efficient way to make strings
// console.log(`Hello my name is ${fname}${lname} and my age is ${age}`);

// const gameName = new String("Muhammad Raza");
const gameName = new String("Muhammad-Raza-bhai");
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf("a"));

const newString = gameName.substring(1, 4);
// console.log(newString);
const anotherString = gameName.slice(-8, 5)
// console.log(anotherString);

const newStrOne = "    MdRaza   ";
// console.log(newStrOne);
// console.log(newStrOne.trim());

const url = "https://www.instagram.com/md%20raza/";
// console.log(url.replace('%20', '-'));
// console.log(url.includes('.com'));

console.log(gameName.split('-'));