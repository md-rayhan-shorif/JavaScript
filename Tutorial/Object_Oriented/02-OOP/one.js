const newHero = ["Iron Man", "Spiderman"]


console.log(newHero)


function multiple (num){
    return num*5
}
multiple.power = 3
console.log(multiple(5))
console.log(multiple.power)
console.log(multiple.prototype)

function createUser (username, score){
    this.username = username
    this.score = score

}

createUser.prototype.increament = function (){
    this.score++;

}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}
const chai = new createUser("Chai", 300)
const tea = new createUser("Tea" , 250)

chai.printMe()
tea.printMe()





















