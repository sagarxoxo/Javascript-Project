const reviewsDetails = [
    {
    id: "1",
    name: "Strang Steve",
    profession: "Front End Developer",
    img: "image/person-1.jpg",
    bio: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
},

{
    id: "2",
    name: "Carta Silv",
    profession: "Back End Developer",
    img: "image/person-2.jpg",
    bio: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
},

{
    id: "3",
    name: "Nagg Kar",
    profession: "Manger",
    img: "image/person-3.jpg",
    bio: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
},

{
    id: "4",
    name: "Carlia Sathi",
    profession: "Photographer",
    img: "image/person-4.jpg",
    bio: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
}
];

const back = document.getElementById('backword');
const forw = document.getElementById('forwad');
const btn = document.getElementById('btn');

let currentId = 1;

const fullName = document.getElementById('name');
const prof = document.getElementById('profession');
const imga = document.getElementById('images');
const bio = document.getElementById('details');

window.addEventListener("DOMContentLoaded", function () {
    const item = reviewsDetails[currentId];
    imga.src = item.img;
    fullName.textContent = item.name;
    prof.textContent = item.profession;
    bio.textContent = item.bio;
})

back.addEventListener('click' , function(){
    currentId--;
    if(currentId == 0) {
        currentId = 4;
    }
    showReviwes(currentId);
})

forw.addEventListener('click' , function(){
    currentId++;
    if(currentId == 4) {
        currentId = 0;
    }
    showReviwes(currentId);
})

function showReviwes(id){
    const item = reviewsDetails[id];
    imga.src = item.img;
    fullName.textContent = item.name;
    prof.textContent = item.profession;
    bio.textContent = item.bio;
}

btn.addEventListener('click', function(){
    showReviwes( random());
})


function random(){
const rnd = reviewsDetails.length;
return Math.floor(Math.random() * rnd);
}




