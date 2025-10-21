const liczba_a = document.querySelector('#liczba_a')
const liczba_b = document.querySelector('#liczba_b')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function(){

    let a = parseFloat(liczba_a.value)
    let b = parseFloat(liczba_b.value)

    let i = ''
    let y = ''

    if (a<=0 && b<=0) {
     i = '1'
        y = '0'

    }

    else if (a<=0 && b>=0) {
     i = '2'
        y = '1'

    }

    else if (a>0 && b<=0) {
        i = '3'
        y = '2'

    }

    else {
        i = '4'
        y = '3'

    }

    wynik.innerHTML = `
    i=${i}
    y=${y}
    
    
    `










})