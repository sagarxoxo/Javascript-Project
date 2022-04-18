color = {
    red: "red",
    blueviolet: "blueviolet",
    green: "green",
    AliceBlue: "#F0F8FF",
    HotPink: "#FF69B4",
    LemonChiffon: "#FFFACD",
};

//geting random value form objet
function random(){
const rnd = Object.keys(color);
return rnd[Math.floor(Math.random() * rnd.length)];
}

var btn = document.getElementById('btn');
const cName = document.getElementsByClassName('cName');

console.log(cName);

btn.addEventListener("click" , function(){
    const rndColor = random();
    document.body.style.backgroundColor = rndColor;
    cName[0].textContent = rndColor;
});










