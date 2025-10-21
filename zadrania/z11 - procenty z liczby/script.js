function procent_z_liczby(liczba_a,procent) {
    return liczba_a * procent / 100
}///
/*
console.log(procent_z_liczby(120,50))
console.log(procent_z_liczby(120,0))
console.log(procent_z_liczby(120,100))
*/

const liczba_a = document.querySelector('#liczba_a')
const procent = document.querySelector('#procent')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function() {

    let a = parseFloat(liczba_a.value)
    let p = parseFloat(procent.value)

    let pa = procent_z_liczby(a, p)

    wynik.innerHTML =
        `
        podana liczba = ${a}<br>
        podany procent = ${p}%<br>
        procent z liczby = <b>${pa}</b><br>
        `
})