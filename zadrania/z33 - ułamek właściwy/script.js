const liczba_a = document.querySelector('#liczba_a')
const liczba_b = document.querySelector('#liczba_b')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function(){

    let a = parseInt(liczba_a.value)
    let b = parseInt(liczba_b.value)

    let dzielenie = ''

    let reszta = ''

    if (b===0) {
        dzielenie = 'nie dzielimy przez 0'
        reszta = 'nie dzielimy przez 0'

    }
    else {

        dzielenie = Math.floor(a / b)
        dzielenie = dzielenie.toFixed(0)
        reszta = (a - b)
    }

    if (reszta===b) {
        reszta = (0)
    }

    else if (reszta>b) {

        reszta = Math.floor(reszta/b)
        reszta = (reszta-b)

    }

    else {
        reszta = (reszta)
    }

        wynik.innerHTML =
    `
    mianownik=${a}<br>
    licznik=${b}<br>
    ułamek=${dzielenie} ${Math.abs(reszta)}/${b}<br>
`

})