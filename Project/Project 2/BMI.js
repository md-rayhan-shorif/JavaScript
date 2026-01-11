

const form = document.querySelector('form')
console.log(form)

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    console.log(height)
    const weight = parseInt(document.querySelector('#weight').value)
    console.log(weight)
    const bmi = (weight/ (height/100)**2).toFixed(2);
    const result = document.querySelector('#result')
    if(isNaN(height) || isNaN(weight)){
        result.innerText = `Please try again`
    }else{

        result.innerText = `Your BMI is ${bmi}`
    }
})