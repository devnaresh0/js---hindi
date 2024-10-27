function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");


}
// sayMyName()

// function addTwoNumbers(number1 ,number2) {
//    console.log(number1 + number2);
// }

function addTwoNumbers(number1 ,number2) {
// let result = number1 + number2

// return result;
return number1 + number2;

}

const result = addTwoNumbers(3, 5);
console.log(result);
// 3 and null are arguments
// number1 and number2 are paramenters

function loginUserMessage(username= "Binod") {
    if(!username) {
        console.log("Please enter a username");
        return;

    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage()); // Output: hitesh just logged in

function calculateCartPrice (va11,val2, ...num1) {
    return num1

}
console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username : "hitesh",
    prices: 199
}

function handleObject(anyobject){

 console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
 
}
// handleObject(user);
handleObject(
    {
        username: "sam",
        price: 399,
    }
)
const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]

}
console.log(returnSecondValue(myNewArray));

function one() {
    const username = "hitesh"
    function tow(){
        const website = "youtube";
        console.log(username);
        
    }
    // console.log(website);
    tow()
}
one()


if(true) {
    const username = "hites";
    if(username === "hites") {
        const website = "youtube";
     //   console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);

// *************** interseting *************
console.log(addone(5))
function addone (num) {
    return num+1


}

// error because we hold it in a variable
addTwo(5)
const addTwo = function(num){
    return num + 2;
}
// addTwo(5)

// variables can hold JSON , functions varaibles are very versitle in javascript

