

 const url = 'https://api.github.com/users/hiteshchoudhary'

 const xhr = new XMLHttpRequest();
 xhr.open('GET', url)
 console.log(xhr)
 xhr.onreadystatechange = function(){
    console.log(xhr.readyState)
    if (xhr.readyState === 4) {
        const  data = JSON.parse(this.responseText)
        console.log(data)
        console.log(data.followers)
        // showing name
        const name = document.querySelector('#name')
        name.innerHTML = data.name;
        // showing photo
        const photo = document.querySelector('#image')
        photo.innerHTML = `<img src=${data.avatar_url} class="bg-amber-50 w-50 h-50" alt="">`

    }
    
 }
 xhr.send()