// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0,23,6,3);
console.log(myCreatedDate.toDateString());
// 9 : 34
let myTimeStamp = Date.now();
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getFullYear());
newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: '',
})