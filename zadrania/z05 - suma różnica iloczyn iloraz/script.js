const a = document.querySelector('#liczba_a')
const b = document.querySelector('#liczba_b')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')



btn.addEventListener('click', function() {

    let a = parseFloat(liczba_a.value)
    let b = parseFloat(liczba_b.value)

    let suma = (a+b)
    let roznica = (a-b)
    let mnozenie = (a*b)
    let reszta = ''
    let dzielenie = ''
    if (b===0) {
         dzielenie = 'nie dzieli się przez zero'
         reszta = 'nie dzielimy przez zero'
    }
    else {
         dzielenie = Math.floor(a / b)
        dzielenie = dzielenie.toFixed(2)
         reszta = (a%b)
    }

    wynik.innerHTML =
    `
    a=${a}<br>
    b=${b}<br>
    suma=${suma}<br>
    roznica=${roznica}<br>
    dzielenie=${dzielenie}<br>
    mnozenie=${mnozenie}<br>
    reszta=${reszta}<br>
    `
})