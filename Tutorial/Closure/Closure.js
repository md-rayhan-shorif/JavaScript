

function init() {
    let name = "rayhan";
    function displayName(){
        console.log(name)
    }

    displayName();
}

// displayName()
init();

/*
function outer() {
    let username = "Yuvraj"
}

console.log(username)

*/


// Closure Real world issue

function clickHandler(color) {
    
    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}
document.getElementById('green').onclick = clickHandler('green')
document.getElementById('orange').onclick = clickHandler('orange')

















