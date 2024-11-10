function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2;
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

// in javascript har chiz is object
// prototype is not only method but also properties
function createUser(username,score){
      this.username = username
      this.score = score
}


createUser.prototype.increment = function(){
    this.score++;
    // this mtlb jis current context
}
createUser.prototype.printMe= function(){
    console.log(`price is ${this.score}`);
    
}
const chai = new createUser("chai",25)
const tea = new createUser("tea",250);

chai.printMe()