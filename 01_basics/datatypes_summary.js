//    primitive datatypes
// 7 types : String, Number, Boolean, null, undefined, BigInt, Symbol
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')
 
console.log(id === anotherId); //false

//const bigNumber = 123454484657843963n


// Non primitive  or  reference type
//  Array, Objects, Functions

const heros = ["Shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Sneha",
    age: 23,

}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber); //undefined
// outsideTemp => object
// scoreValue => number
// myFunction => function
// heros => object
// id or anotherId => Symbol


