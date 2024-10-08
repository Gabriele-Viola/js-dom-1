const bulbEl = document.getElementById('bulb')
const btnEl =document.getElementById('btn')
console.log(btnEl);
console.log(bulbEl);


    btnEl.addEventListener('click',() =>{
        if (btnEl.innerHTML.includes('Accendi')) {
        bulbEl.src = "./assets/img/yellow_lamp.png"
        btnEl.innerHTML ='Spegni'     
        }else{
          bulbEl.src = "./assets/img/white_lamp.png"
        btnEl.innerHTML ='Accendi'  
        }
       
    })
    







