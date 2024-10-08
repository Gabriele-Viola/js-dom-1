const bulbEl = document.getElementById('bulb')
const btnEl =document.getElementById('btn')
console.log(btnEl);
console.log(bulbEl);

if (btnEl.innerHTML.includes('Accendi')) {
    btnEl.addEventListener('click',() =>{
    
        bulbEl.src = "./assets/img/yellow_lamp.png"
        btnEl.innerHTML ='Spegni'
    })
    
}else{

    btnEl.addEventListener('click',() =>{
    
        bulbEl.src = "./assets/img/white_lamp.png"
        btnEl.innerHTML ='Accendi'
    })
}



