// Primitive

// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt
const score = 100;
// Non-primitve

// Reference type {Non Primitive}

// Array, Objects,Functions



// the data type of non primitive data type is function

// Stack (primitive),Heap (Non-primitve)

let myYoutubeName = "hiteshChoudhary";
let anotherName = myYoutubeName
console.log(anotherName);

// Stack me changes copy ke andr hote hain
// aur heap me changes direct hote hain

console.log('Hello my naem is ${anotherName}');
const gameName = new String('Hitesh');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
// 14:32
const newName = gameName.slice(-6,4);
console.log(newName);
const newStringOne = " hitesh "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com"
// browser will convert space to %20
console.log(url.replace('%20','-'));
console.log(url.includes('hitesh'));
console.log(gameName.split('-'));
