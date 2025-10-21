const liczba_x = document.querySelector('#liczba_x')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')



btn.addEventListener('click', function() {

    let a = parseFloat(liczba_x.value)

    let top = (a * a)

    let bt = (1 + a)

    let btm = (bt * bt)

    let end = (top / btm)

    wynik.innerHTML =
        `
        x = ${a}
        ${top}
        ${bt}
        ${btm}
        wartość wyrazu ${end.toFixed(2)}
        `

})