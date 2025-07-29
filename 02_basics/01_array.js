// ARRAY

//const myArr = [1,2,3,4,5]
// console.log(myArr[0]); 
const myHeros = ["Shaktiman", "Naagraj"]
const myHeros2 = ["Hulk", "Thor", "Ironman"]
// console.log(myHeros);
//const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(9)
// console.log(myArr)

//myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)


// SLICE, SPLICE

// console.log("A ", myArr);
// const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("B ", myArr);

// // 
// const myn2 = myArr.splice(1,3)
// console.log(myn2);
// console.log(myn1);

// myHeros.push(myHeros2)
// console.log(myHeros);
// console.log(myHeros[2][2]);

// const allHeros = myHeros.concat(myHeros2)
// console.log(allHeros);

const allHeros = [...myHeros, ...myHeros2]
