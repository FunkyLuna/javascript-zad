const liczba_a = document.querySelector('#liczba_a')
const liczba_b = document.querySelector('#liczba_b')
const liczba_h = document.querySelector('#liczba_h')
const wynik = document.querySelector('#wynik')
const btn = document.querySelectorAll('.button')

addEventListener('click', function(){

let a = parseFloat(liczba_a.value)
let b = parseFloat(liczba_b.value)
let h = parseFloat(liczba_h.value)

let d = (a + b)
let r = (d / 2)
let end = (r * h)

wynik.innerHTML = `

pole trapezu: ${end}

`
})