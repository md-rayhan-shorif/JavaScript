class User {
    #password;
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    // standard way 
    get email(){
        return this._email
    }
    set email(mail){
        this._email = mail; 
    }


    /*
        get password & set password
        ei name gulo properties er name er sathe miliye rakhte hobei. karon eguloi kaj kore. ar vitore jevabe iccha name rakha jay. example: yourpass, pass etc. kintu stander practice holo asol name er name '_' eta lagano. for example: _password
    */
    get password(){
        return this.#password.toUpperCase()
    }
    set password( pass){
        this.#password = pass
    }

}

const rayhan = new User('rayhan@gmail.com', 'abcd')
console.log(rayhan.password)
// # use korle baire sheta access kora jabe na.
// console.log(rayhan.#password)



console.log(rayhan.email)
// '_' eta use korle baire access kore jabe. kintu eta dekhe just developer ra bujbe je eta modify kora thik na. ekta notice er moto kaj kore shudhu.
console.log(rayhan._email)










