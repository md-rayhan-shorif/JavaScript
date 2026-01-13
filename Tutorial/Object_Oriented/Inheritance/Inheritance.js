class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is : ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`This course is added by ${this.username}`)
    }
}

const rayhan = new Teacher("rayhan shorif", "rayhan@gmail.com", 1234)

rayhan.addCourse()

const yuvraj = new User("yuvraj the king")
// User class don't have the propertise of Teacher class
yuvraj.logMe()
// yuvraj.addCourse()


// kar kase kon kon class ( mane ki ki jinis ) access ase sheta check korte - instanceof - use kora jay
console.log(rayhan instanceof User)
console.log(rayhan instanceof Teacher)
console.log(yuvraj instanceof User)
console.log(yuvraj instanceof Teacher)










