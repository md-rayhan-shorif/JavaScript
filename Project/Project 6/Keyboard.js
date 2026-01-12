
const insert = document.querySelector('#insert')

window.addEventListener('keydown', (e)=>{
    insert.innerHTML = `
     <div  class="  flex items-center justify-center">
        <table class=" border-2 border-white p-2">
            <tr>
                <th class=" border-2 border-white p-2 ">Key</th>
                <th class=" border-2 border-white p-2 ">KeyCode</th>
                <th class=" border-2 border-white p-2 ">Code</th>
            </tr>
            <tr>
                <td class=" border-2 border-white p-2 ">${e.key === ' ' ? "Space" : e.key }</td>
                <td class=" border-2 border-white p-2 ">${e.keyCode}</td>
                <td class=" border-2 border-white p-2 ">${e.code}</td>
            </tr>
        </table>
    </div>
    
    `
})