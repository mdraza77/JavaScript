// Date
// const myDate = new Date();
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString);
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);

// const mycreateddate = new Date(2025, 6, 29);
// console.log(mycreateddate.toDateString());

// const mycreateddate = new Date(2025, 6, 28, 24, 0, 0);
// console.log(mycreateddate.toLocaleString());

// const mycreateddate = new Date("2025-03-13");
const mycreateddate = new Date("03-13-2025");
// console.log(mycreateddate.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(mycreateddate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
const ndate = newDate.toLocaleString('default', {
    year: "numeric",
    weekday: "long",
});

console.log(ndate);
