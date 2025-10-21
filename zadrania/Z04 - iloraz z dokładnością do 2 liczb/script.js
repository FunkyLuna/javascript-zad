const a = document.querySelector('#liczba_a')
const b = document.querySelector('#liczba_b')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')



btn.addEventListener('click', function() {

    let a = parseFloat(liczba_a.value)
    let b = parseFloat(liczba_b.value)

    let dzielenie = Math.floor(a/b)

    if (b === 0) {
        wynik.innerHTML = `
        nie dzieli się przez zero
        `
    }
    else

    wynik.innerHTML =
        `
    a=${a}<br>
    b=${b}<br>
    dzielenie=${a/b.toFixed(3)}<br>
    `
})