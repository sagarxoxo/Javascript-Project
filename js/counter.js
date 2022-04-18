let defaultValue = 0;

const btn = document.querySelectorAll('.btn');
const num = document.getElementById('num');


btn.forEach(function(btn){
    btn.addEventListener('click' , function(e){
        if((e.currentTarget.classList).contains("increase")){
             defaultValue++;
             num.textContent = defaultValue;
        }
        else if((e.currentTarget.classList).contains("decrease")){
             defaultValue--;
             num.textContent = defaultValue;
        }
        else if((e.currentTarget.classList).contains("reset")){
            defaultValue = 0;
            num.textContent = defaultValue;
        }

        if(num.textContent < 0){
            num.style.color = "red";
        }
        else if(num.textContent > 0){
            num.style.color = "green";
        }
        else{
            num.style.color = "black";
        }
       
    })
})






