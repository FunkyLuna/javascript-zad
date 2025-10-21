const liczba_a = document.querySelector('#liczba_a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){

    let a =parseFloat(liczba_a.value);
    let b = (1)

    for (; b<=a ;) {
        document.write(b + "<br>");
        b++;
        if (b > a || b > 30) break;
    }

wynik.innerHTML =
    `
    ${b}
    `

})