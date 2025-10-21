const a = document.querySelector('#liczba_a')
const b = document.querySelector('#liczba_b')
const c = document.querySelector('#liczba_c')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function() {

    let a = parseFloat(liczba_a.value)
    let b = parseFloat(liczba_b.value)
    let c = parseFloat(liczba_c.value)

    let p = (a+b+c)/2
    let sa = (p-a)
    let sb = (p-b)
    let sc  = (p-c)
    let qa = (p*sa)
    let qb = (qa*sb)
    let qc = (qb*sc)
    let heron = Math.pow(qc,0.5)

    wynik.innerHTML =
        `
        a=${a}
        b=${b}
        c=${c}
        herona=${heron}
        
    `
})