const bulbEl = document.getElementById('bulb')
const btnEl =document.getElementById('btn')
console.log(btnEl);
console.log(bulbEl);


btnEl.addEventListener('click',() =>{
    bulbEl.src = "./assets/img/yellow_lamp.png"
    btnEl.innerHTML ='Spegni'
})



