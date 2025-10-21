const liczba_a1 = document.querySelector('#liczba_a1');
const liczba_b1 = document.querySelector('#liczba_b1');
const liczba_a2 = document.querySelector('#liczba_a2');
const liczba_b2 = document.querySelector('#liczba_b2');
const liczba_a3 = document.querySelector('#liczba_a3');
const liczba_b3 = document.querySelector('#liczba_b3');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){

    let a = parseFloat(liczba_a1.value)
    let b = parseFloat(liczba_b1.value)
    let x = parseFloat(liczba_a2.value)
    let y = parseFloat(liczba_b2.value)
    let q = parseFloat(liczba_a3.value)
    let e = parseFloat(liczba_b3.value)

    let wyn = ''

    let ay = (a*y)
    let bx = (x*b)
    let xe = (x*e)
    let qy = (q*y)
    let qb = (q*b)
    let ae = (a*e)
    let aybx = (ay - bx)
    let xeqy = (xe - qy)
    let qbae = (qb - ae)
    let aybxxeqy = (aybx + xeqy)
    let pierwsze = (aybxxeqy + qbae)
    let koniec = (pierwsze * 0.5)

    if (koniec === 0) {
        koniec = 'trójkąt nie istnieje'
    }
    else {

    }
wynik.innerHTML =
    `
    pole trójkąta=${koniec}
    
   
    `

})
