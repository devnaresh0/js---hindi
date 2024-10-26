// Global scope
let a = 300
if(true){
    // inside this is block scope
    // Scope
    // Object declaration in Object
    let a = 10
    const b = 20
    // var c = 30
    console.log("INNER: ",a);
    
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}
// console.log(a);
// console.log(b);
console.log(a);




// scopes are different if we run in node and when we run on browser