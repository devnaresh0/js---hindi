// singleton

// object literals 
// Object.create
const mySym = Symbol("Key1")
const JsUser = {
  name : "HItesh",
  "full name" : "HItesh",
[mySym] : "mykey1",
  age : 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday","Saturday"]
  



}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com",
Object.freeze(JsUser);
JsUser.email = "hitesh@mircosoft.com"
console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello JS user");
    
}
JsUser.greetingsTwo = function(){
    console.log("Hello JS user, ${this.name}");
    
}
console.log(JsUser.greetings());
