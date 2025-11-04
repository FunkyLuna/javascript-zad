const oba = document.querySelector('#oba')
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let full = oba.value.trim()
    let notFull = full.split(" ")

    if (notFull.length !== 2) {
        wynik.innerHTML = 'podaj dokładne imię i nazwisko, spacja kurwa'
        return
    }

    let capitalize = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    let formated = `${capitalize(notFull[0])} ${capitalize(notFull[1])}`
    wynik.innerHTML = `
        ${formated}
        `
})