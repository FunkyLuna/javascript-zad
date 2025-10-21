const liczba_a = document.querySelector('#liczba_a')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function() {

    let a = parseFloat(liczba_a.value)

    let s = Math.pow(a,2)

    let z = Math.pow(a,3)

    wynik.innerHTML = `
    
    ${s}
    ${z}
   
    `
})