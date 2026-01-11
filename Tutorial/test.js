console.log("Rayhan Shorif");
console.log("i am best");

const myArr = [1,2,3,4,5,6]

for (const it  of myArr) {
    console.log(it);
}
const name = "Rayhan shorif";
for (const it of name) {
    console.log(it);
}

// maps

const myMap = new Map();
myMap.set('BD', "Bangladesh");
myMap.set('USE', "America"); 
myMap.set('BD', "Bangladesh");

console.log(myMap);
console.log("For Each");
myMap.forEach((item, index, ar) => {
    console.log(item ,"-" , index, ar);
})

for (const [key , value] of myMap) {
    console.log(key , ':-' , value);
}


// forin loop is not working in Map
for (const key in myMap) {
    
    
    const element = myMap[key];
    console.log(`${key} is ${element}`);
    
    
}

// object

const myObj = {
    name: "rayhan",
    age: 23,
    nation: "Bangladesh"
}
// forin is used for Objects
for (const key in myObj) {
    
    
    const element = myObj[key];
    console.log(`${key} is ${element}`);
    
    
}
const arr = ["hello", "hi", "yoo"]
// arr
for (const key in arr) {
    
    
    const element = arr[key];
    console.log(element);
    
    
}

// for each
arr.forEach(element => {
    console.log(element);
});

function print(items){
    console.log(items);
}

arr.forEach(val => {
    console.log(val);
})
console.log("call back");

arr.forEach(print)


// object 
const myCoding = [
    {
        language: "C++",
        fileName: "cpp"
    },
    {
        language: "JavaScript",
        fileName: "js"
    },
    {
        language: "React",
        fileName: "jsx"
    }
]

myCoding.forEach((item)=>{
    console.log(item.language);
    console.log(item.fileName);
})  