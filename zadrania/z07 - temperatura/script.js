const a = document.querySelector('#temperatura')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')



btn.addEventListener('click', function() {

    let a = parseFloat(temperatura.value)

    let kelvin = (a+273.15)
    let mn = (1.8*a)
    let fahrenheit = (mn+32)


    wynik.innerHTML =
        `
    kelvin=${kelvin}<br>
    fahrenheit=${fahrenheit}<br>
    `
})