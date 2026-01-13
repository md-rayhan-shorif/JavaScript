class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is : ${this.username}`)
    }
    static userId(){
        return  console.log('1234');
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

const rayhan = new Teacher("rayhan shorif", "rayhan@gamil.com", 1234);
const yuvraj = new User("Yuvraj is one and only");

console.log(rayhan)
console.log(yuvraj)

// [static] deoya kono function ba jekono kisu class er baire ar access neoya jabe na. orthat value passkorbe na
// console.log(yuvraj.userId())

// console.log(rayhan.userId())