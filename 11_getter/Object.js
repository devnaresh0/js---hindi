const User = {
    _email: 'h@hc.com',
    _password: "abc",

    get _email(){
        return this._email.toUpperCase();

    },

    set _email(value){
        return this._email.toUpperCase();


    },

}

const tea = Object.create(User)
console.log(tea._email);
