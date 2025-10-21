const a = document.querySelector('#secunda')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')



btn.addEventListener('click', function() {

    let a = parseFloat(secunda.value)

    let g = Math.floor(a/3600)
    let pg = (a%3600)
    let m = Math.floor(pg / 60); // Oblicz minuty
    let s = pg % 60; // Sekundy po odjęciu minut

    wynik.innerHTML =
        `
    ${g}g
    ${m}m
    ${s}s
    `
})