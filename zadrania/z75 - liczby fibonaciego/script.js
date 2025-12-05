const liczba_a = document.querySelector("#liczba_a")
const wynik = document.querySelector("#wynik")
const btn = document.querySelector("button")

addEventListener("click", function() {

    let a = parseInt(liczba_a.value)
    let men = ''
    if (a < 0 || isNaN(a)) {
        wynik.innerHTML = `
        podaj liczbę całkowitą
        `
    }
    else if (a === 0) {
        men = "0"
    }

    else if (a === 1) {
        men = "0, 1"
    }

    else {
        let fibo = [0, 1]
        for (let b = 2; b <= a; b++) {
            fibo[b] = fibo[b - 1] + fibo[b - 2]
        }
        men = fibo.join(", ");
    }

   wynik.innerHTML = `
   dla n=${a} wychodzi: <br>${men}
 `
})