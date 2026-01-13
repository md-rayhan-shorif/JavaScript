

console.log("I am best")


function setUsername(username) {
    this.username = username
    console.log("Called")
}

function createUser(username, email, password) {
    setUsername.call(this, username)
    this.email = email;
    this.password = password;
}

const rayhan = new createUser("rayhan shorif", "rayhan@gmail.com", 123)

console.log(rayhan)

 

