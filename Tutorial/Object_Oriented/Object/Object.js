

const chai = {
    name: "rong chaa",
    price: 250,
    isAvailable: true,
    cooking: function(){
        console.log("Cooking chaa")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'))


// unwanted reselt
/*
for (const [key, value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`)
}
*/

// to solve this use a condition
for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`)
    }
}

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'))



// after setting -  enumerable: false - you can see. name won't print in the console.log .
for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`)
    }
}


console.log(Math.PI)
// Math.PI er value change kora jabe na. egulo language er moddhe constant value . ar change na hobar karon holo  writable: true, enumerable: false - egulo core programming er moddhe set kora. jegulo change kora jay na.
/*
Object.defineProperty(Math, 'PI', {
    writable: true,
    enumerable: false
})

*/














