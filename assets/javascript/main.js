const bulbEl = document.getElementById('bulb')
const btnEl = document.getElementById('btn')
const bodyEl = document.getElementById('body')
const pEl = document.getElementById('paragh')
console.log(btnEl);
console.log(bulbEl);


btnEl.addEventListener('click', () => {
    if (btnEl.innerHTML.includes('Accendi')) {
        bulbEl.src = "./assets/img/yellow_lamp.png"
        btnEl.innerHTML = 'Spegni'
        btnEl.classList.add('btnoff')
        btnEl.classList.remove('btn')
        bodyEl.classList.remove('off')
        pEl.innerHTML = 'Ora si vede'
        pEl.classList.remove('on')

    } else {
        bulbEl.src = "./assets/img/white_lamp.png"
        btnEl.innerHTML = 'Accendi'
        btnEl.classList.add('btn')
        btnEl.classList.remove('btnoff')
        bodyEl.classList.add('off')
        pEl.classList.add('on')
        pEl.innerHTML = 'Non si vede nulla!'

    }

})






