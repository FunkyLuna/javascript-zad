const liczba_a = document.querySelector('#liczba_a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click',function () {
    let a = parseFloat(liczba_a.value);
    let tekst = ""
    if (isNaN(a)) {
        wynik.innerHTML = "Podaj poprawną liczbę całkowitą!";
        return;
    }
    for (let i = 1; i <= a; i++) {
        const strzalki = "> ".repeat(i);
        const fraction = 1/i;
        const decimal = (1 / i).toFixed(6);
        tekst = tekst + "Piętro" + i + strzalki + fraction + "-" + decimal + "<br>";
        wynik.innerHTML = tekst;
        if (i===a){
            break
        }
    }
    const szczytStrzalki = "> ".repeat(a + 1);
    const powrotStrzalki = "< ".repeat(a + 1);
    tekst = tekst + szczytStrzalki + "Koniec wspinaczki wracamy" + powrotStrzalki + "<br>";
    wynik.innerHTML = tekst;
    for (let i = a; i >= 1; i--) {
        const strzalki = "< ".repeat(i);
        tekst = tekst + strzalki + "Piętro" + i + "<br>";
        wynik.innerHTML = tekst;
        if (i===1) {
            break
        }
    }

})