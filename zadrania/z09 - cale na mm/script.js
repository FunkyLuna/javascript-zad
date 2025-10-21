const a = document.querySelector('#cale');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');



btn.addEventListener('click', function() {

    let a = parseFloat(cale.value)

    let cal = (a*25.3995)

    wynik.innerHTML =
          `
    ${a} cali to ${cal}mm
    
    `
})