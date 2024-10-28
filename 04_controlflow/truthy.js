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