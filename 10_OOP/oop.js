// const User  = {
//     username: "hitesh",
//     LoginCount: 8,
//     signedIn: true,
//     getUserDetail: function(){
//       //  console.log("Got user details from database");
//      //   console.log(`Username: ${this.username}`);
//        console.log(this);
        
//     }


// }
// const User2  = {
//     username: "hitesh",
//     LoginCount: 8,
//     signedIn: true,
//     getUserDetail: function(){
//       //  console.log("Got user details from database");
//      //   console.log(`Username: ${this.username}`);
//        console.log(this);
        
//     }


// }

// console.log(User.username);
// console.log(User.getUserDetail);

// console.log(this);

// const promiseOne = new Promise();
const date = new Date();

function User(username,LoginCount,isLoggedIn){
    this.username = username;
    this.LoginCount = LoginCount;
    this.isLoggedIn = isLoggedIn;
    this.greetings = function(){
        console.log('Welcome ${this.username}');
        
    }

  //  return this
}
const userONe = new User("hitesh",12,true)
const userTwo = new User("Chai aur code",11,false)
console.log(userONe.constructor);
// console.log(userTwo);

// implicitly defined this