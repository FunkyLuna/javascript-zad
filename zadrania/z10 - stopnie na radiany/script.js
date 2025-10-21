const liczba_a = document.querySelector('#liczba_a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let a = parseInt(liczba_a.value);
    let mat = (a * Math.PI /180);

    wynik.innerHTML =
`
    ilość stopni: ${a}<br>
    ilość radianów: ${mat.toFixed(15)}<br>
`
})