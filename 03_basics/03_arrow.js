const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
        
    }
}

user.welcomeMessage()
user.username = "Sam"
// context = kis bare me bat ho rhi hai
// this = current context
user.welcomeMessage()

console.log(this);
// for node enviournment this = {}
// for website = website

// function chai(){
//     let username = "hitesh"
//     // its working for object but not functions
//     console.log(this.username);
    
// }
// chai()

// const chai = function () {
//   let username = "hitesh"
// //     // its working for object but not functions
//     console.log(this.username);
    
// }
const chai =  () => {
    let username = "hitesh"
  //     // its working for object but not functions
      console.log(this);
      
  }


// chai()
// const addTow = (num1,num2) => {
//     return num1+num2;

// }
// const addTow = (num1,num2) => num1+num2

// const addTow = (num1,num2) =>( num1+num2)

// curly braces if we use then we have to write return but if we use
// brackets then we won't

const addTow = (num1,num2) => ({username: "hitesh"})

console.log(addTow(3,4));


// const myArray = [2,5,3,7,8]
// myArray.forEach()
