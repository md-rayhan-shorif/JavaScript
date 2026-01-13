

// Creating Promise 
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve();
        console.log("Async one complete")
    }, 1000);
})

promiseOne.then(function(){
    console.log("Async one resolved")
})

// passing resolve values or object
const promiseThree = new Promise(function(res, rej){
    setTimeout(() => {
        res({ username: "Rayhan Shorif", email: "rayhan@gmail.com" })
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user)
})

// passing particular values or data by using chainning
const promiseFour =  new Promise(function(res, rej){
    setTimeout(() => {
        let error =false;
        if (!error) {
            res({username: "Rayhan Shorif", email: "rayhan@gmail.com" })
        }else{
            rej("Something went wrong")
        }
    }, 1000);
})

promiseFour
.then((user) => {
    console.log(user)
    return user.username;
})
.then( username => {
    console.log(username)
})
.catch((error)=>{
    console.log(error)
})
.finally( ()=>{
    console.log("The Promise is finally done")
})


//  Alternative and the better way to use promise chainning

const promiseFive = new Promise((res, rej)=>{
    setTimeout(() => {
        let error =true;
        if (!error) {
            res({username: "Rayhan Shorif", email: "rayhan@gmail.com" })
        }else{
            rej("Something went wrong")
        }
    }, 1000);
}) 

// this is good but it can't handle error / rejection
/*
async function consumePromiseFive() {
    const response = await promiseFive
    console.log(response)
}

consumePromiseFive()
*/

// best approch - 

async function consumePromiseFive() {
    try{

        const response = await promiseFive
        console.log(response)
    }catch(error){
        console.log(error)
    }
}

consumePromiseFive()



// using fetch mathod to get data from api
const pic = document.querySelector('#picture')



async function getRandomUser() {
    try {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json();
        pic.innerHTML = `
        <img src=${data.results[0].picture.large} class="bg-amber-50 w-50 h-50" alt="">`

        console.log(response)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getRandomUser()

// another way to use fetch - by using then

const image = document.querySelector('#image')
fetch('https://randomuser.me/api/')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    image.innerHTML = `
        <img src=${data.results[0].picture.large} class="bg-amber-50 w-50 bg-cover h-50" alt="">`
    console.log(data)

})
.catch((error)=>{
    console.log("Error ")
})
















