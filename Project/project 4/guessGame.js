

let rand = parseInt(Math.random() * 100 + 1 );
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#userin')
const guessSlot = document.querySelector('#guesslist')
const guessLeft = document.querySelector('#guessleft')
const lastResult = document.querySelector('#lowOrHi')
const startOver = document.querySelector('#resultPara')

const p = document.createElement('p')

guessLeft.innerHTML = 10;

let prevGuess = [];
let numGuesses = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
        const userVal =  parseInt(userInput.value)
        validateGuess(userVal)
        console.log(userVal)
    })
}

function validateGuess (guess)  {
    if(isNaN(guess) ){
        alert("Please enter valid number")
    }else if(guess < 1){
        alert("Please Enter a number more then 1")
    }else if(guess > 100){
        alert("Please Enter a number between 1 and 100")
    }else{
        prevGuess.push(guess)
        if (numGuesses === 10) {
            displayGuess(guess)
            displayMessage(`Game over. Random number was ${rand}`)
            endGame()
        }else{
            displayGuess()
            checkGuess(guess)
        }
    }
}
function checkGuess (guess)  {
    if (guess === rand) {
        displayMessage(`Congratulation. You Guessed Right.`)
        endGame()
    }else if (guess < rand) {
        displayMessage(`Number is too low.`)
    }else if (guess > rand) {
        displayMessage(`Number is too high.`)
    }
}
function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML = `${prevGuess}, `
    numGuesses++;
    guessLeft.innerHTML= `${11 - numGuesses}`
}
function displayMessage (message)  {
    lastResult.innerHTML = `${message}`
}

function newGame(){
    const newGameButton = document.querySelector('#newgame')
    newGameButton.addEventListener('click', (e)=>{
        e.preventDefault();
        rand =  parseInt(Math.random() * 100 + 1 );
        prevGuess = []
        numGuesses = 1
        guessSlot.innerHTML = ''
        guessLeft.innerHTML= `${11 - numGuesses}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
    })
}
function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h1 id="newgame" class=" cursor-pointer rounded-xl p-2 bg-gray-800 hover:bg-gray-700 ">Start now</h2>`;
    startOver.appendChild(p)
    playGame = false;
    newGame()
}
 

console.log(rand)
















