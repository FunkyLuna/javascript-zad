const liczba_a = document.querySelector('#liczba_a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let mies = parseInt(liczba_a.value)
    switch (mies) {
        case 1: wynik.innerHTML = ` ${mies} : styczeń<br>`
            break;
        case 2: wynik.innerHTML = ` ${mies} : luty<br>`
            break;
        case 3: wynik.innerHTML = ` ${mies} : marzec<br>`
            break;
        case 4: wynik.innerHTML = ` ${mies} : kwiecień<br>`
            break;
        case 5: wynik.innerHTML = ` ${mies} : may<br>`
            break;
        case 6: wynik.innerHTML = ` ${mies} : czerwiec<br>`
            break;
        case 7: wynik.innerHTML = ` ${mies} : lipiec<br>`
            break;
        case 8: wynik.innerHTML = ` ${mies} : sierpeień<br>`
            break;
        case 9: wynik.innerHTML = ` ${mies} : wrzecień<br>`
            break;
        case 10: wynik.innerHTML = ` ${mies} : pażdziernik<br>`
            break;
        case 11: wynik.innerHTML = ` ${mies} : listopad<br>`
            break;
        case 12: wynik.innerHTML = ` ${mies} : grudzień<br>`
            break;
        default: wynik.innerHTML = ` liczba z poza zakresu<br>`


    }
})