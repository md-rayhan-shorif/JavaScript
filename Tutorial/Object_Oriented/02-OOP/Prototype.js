const username = "Rayhan shorif   "

String.prototype.trueLength = function (){
    console.log(this)
    console.log(`True length is :  ${this.trim().length}`)
}

username.trueLength();
"Hello        ".trueLength();


Object.prototype.rayhan = function () {
    console.log("Rayhan is watching all objects")
}

username.rayhan()
const myArr = [1,2,3,4,4]
myArr.rayhan()





