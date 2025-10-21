const liczba_a = document.querySelector('#liczba_a')
const liczba_b = document.querySelector('#liczba_b')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function() {

    let a = parseFloat(liczba_a.value)
    let b = parseFloat(liczba_b.value)

    let dzielenie = ''

    if (b===0) {
        dzielenie = 'nie dzielimy przez zero'

    }

    else {

        if ((typeof a === "number") && (typeof b === "number") && Math.floor(a) === a && Math.floor(b) === b ) {
            dzielenie = Math.floor(a / b)
        }
        else
            dzielenie = 'przynajmniej jedna liczba nie jest całkowita'
        }
        wynik.innerHTML =
            `
        a=${a}
        b=${b}
        wynik=${dzielenie}
        `
})