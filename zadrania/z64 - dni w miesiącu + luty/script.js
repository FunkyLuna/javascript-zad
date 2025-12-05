const liczba_a = document.querySelector("#liczba_a")
const liczba_b = document.querySelector("#liczba_b")
const wynik = document.querySelector("#wynik")
const btn = document.querySelector("button")

btn.addEventListener("click", function() {

    let a = parseInt(liczba_a.value)
    let b = parseInt(liczba_b.value)

    if (a === 2 && b % 4 === 0 && b % 100 !== 0 || a === 2 && b % 400 === 0) {
        wynik.innerHTML = `miesiąc ma  29 dni`
    }
    else if (a === 2 && b % 4 !== 0 && b % 100 === 0 || a === 2 && b % 400 !== 0) {
        wynik.innerHTML = `miesiąc ma  28 dni`
    }
    else if (a === 4 || a === 6 || a === 9 || a === 11) {
        wynik.innerHTML = `miesiąc ma  30 dni`
    }
    else if (a === 1 || a === 3 || a === 5 || a === 7 || a === 8 || a === 10 || a === 12) {
        wynik.innerHTML = `miesiąc ma  31 dni`
    }
    else {
        wynik.innerHTML = `trudno przeczytać?`
    }


})

