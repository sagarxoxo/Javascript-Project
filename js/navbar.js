const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1');
const items = document.getElementById('items');
const head = document.getElementsByClassName('header');

if(screen.width < 500 ){
    btn.style.display = "block";
}

// Array.from(items).forEach(function(items){
//     btn.addEventListener('click' , function(){
//         items.style.display = "block";
//         btn1.style.display = "block";
// })
// btn1.addEventListener('click' , function(){
//     items.style.display = "block";
//     btn1.style.display = "block";
// })

// })

Array.from(head).forEach(function(head){
    head.addEventListener('click' , function(e){
        if(e.target.id == 'btn'){
            items.style.display = "block";
            btn1.style.display = "block";
            btn.style.display = "none";
        }
        else if(e.target.id == 'btn1'){
            items.style.display = "none";
            btn1.style.display = "none";
            btn.style.display = "block";
        }
    })
})