const liczba_a = document.querySelector('#liczba_a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
     let dzien = parseInt(liczba_a.value)
    switch (dzien) {
        case 1: wynik.innerHTML = ` ${dzien} : poniedziałek<br>`
            break;
        case 2: wynik.innerHTML = ` ${dzien} : wtorek<br>`
            break;
        case 3: wynik.innerHTML = ` ${dzien} : środa<br>`
            break;
        case 4: wynik.innerHTML = ` ${dzien} : czwartek<br>`
            break;
        case 5: wynik.innerHTML = ` ${dzien} : piątek<br>`
            break;
        case 6: wynik.innerHTML = ` ${dzien} : sobota<br>`
            break;
        case 7: wynik.innerHTML = ` ${dzien} : niedziela<br>`
            break;
        default: wynik.innerHTML = ` liczba z poza zakresu<br>`


    }
})