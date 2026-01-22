const rang = document.querySelector("#range")
const dat = document.querySelector("#date")
const co = document.querySelector("#col")
const tit = document.querySelector("#tit")
const ranged = document.querySelector("#ranged")
const dated = document.querySelector("#dated")
const coled = document.querySelector("#coled")
const btn = document.querySelector("button")

btn.addEventListener("click", () => {

    let range = rang.value
    let date = dat.value
    let col = co.value

    dated.innerHTML += date
    ranged.innerHTML += range
    coled.innerHTML += `ocena kolorem`

    tit.style.color = col
    coled.style.color = col

})