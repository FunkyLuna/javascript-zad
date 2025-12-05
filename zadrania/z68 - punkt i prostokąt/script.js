const liczba_x = document.querySelector("#liczba_x")
const liczba_y = document.querySelector("#liczba_y")
const liczba_a = document.querySelector("#liczba_a")
const liczba_b = document.querySelector("#liczba_b")
const liczba_c = document.querySelector("#liczba_c")
const liczba_d = document.querySelector("#liczba_d")
const wynik = document.querySelector("#wynik")
const btn = document.querySelector("button")

btn.addEventListener("click", function() {

    let x = parseInt(liczba_x.value)
    let y = parseInt(liczba_y.value)
    let a = parseInt(liczba_a.value)
    let b = parseInt(liczba_b.value)
    let c = parseInt(liczba_c.value)
    let d = parseInt(liczba_d.value)

    if (a>b || c>d) {
        wynik.innerHTML = `
        a musi być mniejsze od b, c mniejsze od d
        `
    }
    else if (a<b && c<d && a < x && a < b && c < y && y < d) {
        wynik.innerHTML = `
        punkt jest wewnątrz prostokąta
        `
    }
    else if (a<b && c<d && x === a || a<b && c<d && x === b || a<b && c<d && y === c || a<b && c<d && y === d) {
        wynik.innerHTML = `
        punkt jest na krawędzi prostokąta
        `
    }
    else {
        wynik.innerHTML = `
        punkt jest na zewnątrz prostokąta
        `
    }

})
