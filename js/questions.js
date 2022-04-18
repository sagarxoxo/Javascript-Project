
const sec = document.querySelectorAll('.questionSection');
const ans = document.querySelector('.answer');
const expand = document.querySelectorAll('.questionButton');

sec.forEach(function(){

    expand.forEach(function (f){
        f.addEventListener('click', function(e){
            const active = e.currentTarget.parentElement.parentElement;
            active.classList.add("showAnswer");
            
        })
    })
    
})



