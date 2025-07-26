// const { useDeferredValue } = require("react");

// const name = "Sneha"
// const repoCount = 10

// // console.log(name + repoCount + " Value");
// console.log(`${name} ${ repoCount} Value`); // STRING INTERPULATION

const gameName = new String('Sneha-SS')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// //String METHOD

// console.log(gameName.length);

// console.log(gameName.toUpperCase());// no change to original value
// console.log(gameName);
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('h'));

// const newString = gameName.substring(0,4)
// console.log(newString);

// const anotherString = gameName.slice(-8,2)
// console.log(anotherString);

// const newStringOne = "   Sneha   "
// console.log(newStringOne);
// console.log(newStringOne.trim()); // MDN Docs (trim)

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'));

console.log(gameName.split('-'));