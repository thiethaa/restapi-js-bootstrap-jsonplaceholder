
var btn = document.getElementById("btn").addEventListener('click',loadImage);
var card= document.getElementById("card_div");

function loadImage(){
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then (res=>res.json())
    .then (data =>{
        for (let i = 0; i < 20; i++) {
            card.innerHTML +=`
            <div class="card col-3 m-1 mx-auto">
              <img src="${data[i].thumbnailUrl}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${data[i].url}</h5>
                <p class="card-text">${data[i].title}</p>
            </div>`
        }
    })
    .catch((error)=>{
        console.log(error);
    })
};
