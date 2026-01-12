

// onClick event - not recommended
/*
document.getElementById('owl').onclick = () => {
    alert('owl')
}
*/
// learn - type, timestamp, defaultPrevented , target, toElement, srcElement, currentTarget, altkey, ctrlkey, shiftkey, keyCode
// interview - clientX, ClientY, screenX, screen
/* event topics */
/*
// onClick event - recommended
document.querySelector('#images').addEventListener('click', (e)=>{
    
    console.log("Ul click default")
}, false) // it mean bubbling - means child to parent
document.querySelector('#owl').addEventListener('click', (e)=>{
    console.log(".........................")
    console.log("owl click default")
    e.stopPropagation(); // stopping bubble
    
}, false) // it mean bubbling - means child to parent


document.querySelector('#images').addEventListener('click', (e)=>{
    console.log("ul click - true")
}, true) // it mean bubbling cancel - means parent to child
document.querySelector('#owl').addEventListener('click', (e)=>{
    console.log("owl click - true")
}, true) 

// stop default prevent
document.getElementById('google').addEventListener('click', (e)=>{
    e.preventDefault();
    console.log("Google clicked")
    e.stopPropagation();
})

*/

document.querySelector('#images').addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(e.target.tagName)
    let removeIt = e.target.parentNode
    // mathod 1 to remove - direct use remove() function
    // removeIt.remove()
    // madhod 2 to remove - access parent then remove child
    // removeIt.parentNode.removeChild(removeIt)

    if (e.target.tagName === 'IMG' || e.target.tagName === 'A') {
        removeIt.remove()
    }
}, false  )



document.body.addEventListener('click', (e) => {
    console.log("Event Type:", e.type); // "click"
    console.log("Clicked Element:", e.target); 
    console.log("Was Shift held?", e.shiftKey);
    console.log("Mouse X (Browser):", e.clientX);
    console.log("Mouse X (Full Screen):", e.screenX);
});

































