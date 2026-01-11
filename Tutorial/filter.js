/*

console.log("I am Hero");

const coding = ["js", "Rubi", "c++", "Python"];
// for-each does not return values
const values = coding.forEach((item)=>{
    console.log(item);
    return item;
})

console.log(values);
console.log("---------------");
// filter 
const num = [1,2,3,4,5,6,7,8];
const newNum = num.filter((n)=>{
   return n > 4;
})
// by using for each
const newnumber = [];
num.forEach((item)=>{
    newnumber.push(item);
})
console.log(newnumber);
console.log(newNum);

console.log("----------------------");

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 }
];

const userbooks = books.filter((bk) => bk.publish > 1995 && bk.genre === 'Science' )

console.log(userbooks);

console.log("----------------");

const n = [1,2,3,4,5,6,7,8,9]

const newN = n.map((num)=> num+10 );
console.log(newN);

console.log("----------------");
// chaining 
const mainN = n
.map((num) => num *10)
.map((num)=> num + 2)
.filter((num) => num >= 40)

console.log(mainN);
console.log("----------------");

const initialVal = 0;
const sum = n.reduce((accu, curr) =>  (accu + curr), initialVal);
console.log(sum);
console.log("----------------");

const shoppingCart = [
    {
        itemName: "Js course",
        price: 4000
    },
    {
        itemName: "c++ course",
        price: 5900
    },
    {
        itemName: "Py course",
        price: 6999
    },
    {
        itemName: "React course",
        price: 14000
    },
    
]

const totalPrice = shoppingCart.reduce((acc, item) => (acc + item.price), 0)
console.log(totalPrice);









const parent = document.querySelector(".parent")
console.log(parent)
console.log(parent.firstElementChild)
// console.log(parent.children)
// console.log(parent.children[1].innerHTML)


for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML)
    const myP = parent.children[i]
    myP.style.backgroundColor = "orange"
    myP.style.margin = "15px" 

    
}

 */

// this mathod is not recommended    
const addlanguage = (lan) => {
    const li = document.createElement('li');
    li.innerHTML= `${lan} `;
    document.querySelector('ul').append(li)
}
addlanguage("C++")
addlanguage("JavaScript")

// this mathod is recommended
function addOptionLan(lan){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(lan))
    document.querySelector('ul').appendChild(li)
}
addOptionLan("Python")

/* Edit */
const seclan = document.querySelector('li:nth-child(2)') // selecting perticular tag
const newli = document.createElement('li') // creating new tag
newli.innerText = "React.js" // giving value or contend
seclan.replaceWith(newli) // replace with new element

// example

const fistLang = document.querySelector('li:first-child')
 
const repNewli = document.createElement('li')
repNewli.innerHTML = "CSS";
fistLang.replaceWith(repNewli)

// another way to edit elements
const thirdLang = document.querySelector("li:nth-child(3)") // first access the element 
thirdLang.outerHTML = '<li>TypeScript</li>' // then give full html code

// removing last lang
const lastLang = document.querySelector('li:last-child')

lastLang.remove() // remove the element using remove() function
