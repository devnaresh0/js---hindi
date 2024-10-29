const userEmail = "h@hitesh.ai";

if(userEmail){
    console.log("Got user Email");
    
} else {
    console.log("Don't have user email");
    
}

// when you assume when string to be true


// falsy values

// false, 0,-0,BigInt 0n = falsy value , "",null, undefined,Nan

// truthy values
//  "0",'false'," ",[],{},function() {},
if (userEmail.length === 0) {
    console.log("Array is empty");
    
}

const emptyObje = {}

if (Object.keys(emptyObje).length===0) {
    console.log("Object is empty");
    

}


// Nullish Coalescing Operation (??) : null undefined

let val1;
// val1 = 5 ?? 10
// it's only for null and undefined

val1 = undefined ?? 15;
// val1 = null ?? 10
val1 = null ?? 10 ?? 10
console.log(val1);

// Terniary Operator 

// condition ? true : false;

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80");

