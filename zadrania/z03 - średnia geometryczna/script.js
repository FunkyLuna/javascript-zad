const a = document.querySelector('#liczba_a')
const b = document.querySelector('#liczba_b')
const c = document.querySelector('#liczba_c')
const d = document.querySelector('#liczba_d')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')



btn.addEventListener('click', function() {

    let a = parseFloat(liczba_a.value)
    let b = parseFloat(liczba_b.value)
    let c = parseFloat(liczba_c.value)
    let d = parseFloat(liczba_d.value)

    let suma = (a*b*c*d)
    let pierwiastek_a_4 = Math.pow (suma,0.25)

    wynik.innerHTML =
        `
        a=${a}
        b=${b}
        c=${c}
        d=${d}
        suma=${suma}
        pierwiastek_a=${pierwiastek_a_4.toFixed(4)}
        
    `
})