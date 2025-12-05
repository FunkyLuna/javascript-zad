const liczba_a = document.querySelector("#liczba_a")
const liczba_b = document.querySelector("#liczba_b")
const liczba_c = document.querySelector("#liczba_c")
const wynik = document.querySelector("#wynik")
const btn = document.querySelector("button")

btn.addEventListener("click", function() {

    let a = parseInt(liczba_a.value)
    let b = parseInt(liczba_b.value)
    let c = parseInt(liczba_c.value)

    let delta = (b * b - 4 * a * c)

    if (delta > 0) {
        let x1 = (-b - Math.sqrt(delta)) / (2 * a)
        let x2 = (-b + Math.sqrt(delta)) / (2 * a)
        wynik.innerHTML = `
        A = ${a} <br>
        B = ${b} <br>
        C = ${c} <br>
       rozwiązanie: równanie ma 2 rozwiązania, x1 = ${x1.toFixed(2)} i x2 = ${x2.toFixed(2)}
        `
    }

    else if (delta === 0) {
        let x0 = -b / (2 * a)
        wynik.innerHTML = `
        A = ${a} <br>
        B = ${b} <br>
        C = ${c} <br>
       rozwiązanie: równanie ma 1 rozwiązanie, x0 = ${x0.toFixed(2)}
        `
    }

    else if (delta < 0) {
        let x0 = -b / (2 * a)
        wynik.innerHTML = `
        A = ${a} <br>
        B = ${b} <br>
        C = ${c} <br>
       rozwiązanie: równanie nie ma rozwiązań
        `
    }

})

