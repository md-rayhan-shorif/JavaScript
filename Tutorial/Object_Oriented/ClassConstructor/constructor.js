

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;

    }

    encryptPass(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }


}

const rayhan = new User("rayhan shorif", "rayhan@gmail.com", 123)

console.log(rayhan)
console.log(rayhan.encryptPass())
console.log(rayhan.changeUsername())