const score = 400
// console.log(score);

const balance = new Number(100);
// console.log(balance);


//converted into string
// console.log(balance.toString().length);

// console.log(balance.toFixed(2));

const otherNumber = 523.7856
//const otherNumber = 23.7856
//const otherNumber = 23.7856

// console.log(otherNumber.toPrecision(2));
// console.log(otherNumber.toPrecision(3));


const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));



//++++++++++++++++++++++++++ MATH ++++++++++++++++++++++++++++++++++

// console.log(Math); //Object [Math] {}
// console.log(Math.abs(-4)); //4
// console.log(Math.round(15.73)); //16
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.2)); //4
// console.log(Math.min(4,3,6,8,9));
// console.log(Math.max(4,3,6,8,9));


// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);