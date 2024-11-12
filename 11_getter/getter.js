class User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    get password(){
        return this.password.toUpperCase();

    }

    set password(value){
        this._password =value.toUpperCase();

    }
}
const hitesh = new User("hitesh@hitesh.ai","123");
console.log(hitesh.password);
// getter and setter for not giving accessd

