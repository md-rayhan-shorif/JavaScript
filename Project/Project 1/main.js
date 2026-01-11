
const button = document.querySelectorAll(".button")
// console.log(button)

const body = document.querySelector('body')
// console.log(body)

button.forEach((myButton)=>{
    console.log(myButton)
    myButton.addEventListener('click', (e)=>{
        const setColor = e.target.id
        console.log(e)
        console.log(e.target.id)

        body.className = `${setColor} text-white`

    })
})