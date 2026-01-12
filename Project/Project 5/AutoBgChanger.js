

const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i  = 0; i  < 6; i ++) {
        color += hex[Math.floor(Math.random() * 16)]
        
        
    }
    return color;

}



const body = document.querySelector('body')
const startBtn = document.querySelector('#startbtn')
const stopBtn = document.querySelector('#stopbtn')



let intervalId; 

const startChanging = function () {
    if (!intervalId) {
        intervalId = setInterval(() => {
         body.style.backgroundColor = randomColor(); 
         
    }, 1000);
    }
     
}
const stopChanging = function () {
    clearInterval(intervalId)
    intervalId = null;
}




startBtn.addEventListener('click', startChanging)
stopBtn.addEventListener('click', stopChanging)