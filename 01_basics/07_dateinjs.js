// Dates 


let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);
                           //yyyy, mm, dd
//let myCreatedDate = new Date(2025, 0, 25);
//let myCreatedDate = new Date(2025, 0, 25, 5, 3);
//let myCreatedDate = new Date("2025-01-14");
let myCreatedDate = new Date("01-14-2023");
//console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now() //time in miliseconds 

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate= new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//`${newDate.getDay()}` and the time

newDate.toLocaleString('default',{
    // ctrl + space
    weekday: "long" //Monday, Tuesday,-----full name
})