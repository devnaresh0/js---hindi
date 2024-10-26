// const tinderUser = new Object()
const tinderUser = {}
 tinderUser.id = "123abc"
 tinderUser.name = "Sam"
 tinderUser.isLoggedIn = false
// console.log(tinderUser);
const regularUser = {
    email: "some@gamil.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "Choudhary"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);

// console.log(regularUser.fullname?.userfullname.firstname);
const Obj1 = {1: "a",2: "b"}
const Obj2 = {3: "a",4: "b"}
// const obj3 = { Obj1,Obj2}
// const obj3 = Object.assign({},Obj1,Obj2);
const obj3 = {...Obj1,...Obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(tinderUser.hasOwnProperty('isLogged'));
