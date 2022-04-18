const btn = document.getElementById('btn');
const cross = document.getElementById('cross');

const openModal = document.getElementsByClassName('openModal');

btn.addEventListener('click', function(){
    openModal[0].style.display = "block";
})

cross.addEventListener('click', function(){
    openModal[0].style.display = "none";
})
