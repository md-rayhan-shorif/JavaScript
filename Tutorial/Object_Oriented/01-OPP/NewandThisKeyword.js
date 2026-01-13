


function user (username, follower, isLogin){
    this.username = username;
    this.follower = follower;
    this.isLogin = isLogin;
    this.greeting = function () {
        console.log(`Welcome ${this.username}`)
    }

    // return this // this is not required to write, by defaul it return " return this" automatically.
}

const userOne = new user("rayhan shorif", 100, true )
const userTwo = new user("rayhan shorif yuvraj", 100, true )

console.log(userOne, userOne.greeting())
console.log(userTwo )
// console.log(userTwo.constructor)

























