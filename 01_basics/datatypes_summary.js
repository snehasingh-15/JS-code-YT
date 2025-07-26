//    primitive datatypes
// 7 types : String, Number, Boolean, null, undefined, BigInt, Symbol
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')
 
///console.log(id === anotherId); //false

//const bigNumber = 123454484657843963n


// Non primitive  or  reference type
//  Array, Objects, Functions

const heros = ["Shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Sneha",
    age: 23,

}

// const myFunction = function(){
//     console.log("Hello World");
// }

//console.log(typeof bigNumber); //undefined
// outsideTemp => object
// scoreValue => number
// myFunction => function
// heros => object
// id or anotherId => Symbol

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive), Heap Memory (Non - Primitive)

// In stack => copy
// In Heap => actual value(reference) 

let myYoutubename = "SnehaSingh"

let anothername = myYoutubename
anothername = "chaiandcode"

// console.log(anothername);// chaiandcode
// console.log(myYoutubename); //SnehaSingh

let userOne = {
    email: "user@google.com",
    upi: "user@bl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);