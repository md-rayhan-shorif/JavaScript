

const clock = document.getElementById('clock')


setInterval(() => {
    let date = new Date().toLocaleTimeString();
    // console.log(date)
    clock.innerText = date
}, 1000);














