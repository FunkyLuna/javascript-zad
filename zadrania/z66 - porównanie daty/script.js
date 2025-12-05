const liczba_a = document.querySelector("#liczba_a")
const liczba_b = document.querySelector("#liczba_b")
const liczba_c = document.querySelector("#liczba_c")
const liczba_z = document.querySelector("#liczba_z")
const liczba_x = document.querySelector("#liczba_x")
const liczba_y = document.querySelector("#liczba_y")
const wynik = document.querySelector("#wynik")
const btn = document.querySelector("button")

btn.addEventListener("click", function() {

    let a = parseInt(liczba_a.value)
    let b = parseInt(liczba_b.value)
    let c = parseInt(liczba_c.value)
    let z = parseInt(liczba_z.value)
    let x = parseInt(liczba_x.value)
    let y = parseInt(liczba_y.value)

   if (c>y) {
       wynik.innerHTML = `
       pierwsza data: ${a}-${b}-${c} <br> 
       druga data: ${z}-${x}-${y} <br> 
       druga data ${z}-${x}-${y} jest wcześniejsza
       `
   }
   else if (c<y) {
       wynik.innerHTML = `
       pierwsza data: ${a}-${b}-${c} <br> 
       druga data: ${z}-${x}-${y} <br> 
       pierwsza data ${a}-${b}-${c} jest wcześniejsza
       `
   }
   else if (c===y && b<x) {
       wynik.innerHTML = `
       pierwsza data: ${a}-${b}-${c} <br> 
       druga data: ${z}-${x}-${y} <br> 
       pierwsza data ${a}-${b}-${c} jest wcześniejsza
       `
   }
   else if (c===y && b>x) {
       wynik.innerHTML = `
       pierwsza data: ${a}-${b}-${c} <br> 
       druga data: ${z}-${x}-${y} <br> 
       druga data ${z}-${x}-${y} jest wcześniejsza
       `
   }
   else if (c===y && b===x && a<z) {
       wynik.innerHTML = `
       pierwsza data: ${a}-${b}-${c} <br> 
       druga data: ${z}-${x}-${y} <br> 
       pierwsza data ${a}-${b}-${c} jest wcześniejsza
       `
   }
   else if (c===y && b===x && a>z) {
       wynik.innerHTML = `
       pierwsza data: ${a}-${b}-${c} <br> 
       druga data: ${z}-${x}-${y} <br> 
       druga data ${z}-${x}-${y} jest wcześniejsza
       `
   }
   else if (c===y && b===x && a===z) {
       wynik.innerHTML = `
       pierwsza data: ${a}-${b}-${c} <br> 
       druga data: ${z}-${x}-${y} <br> 
       obie date ${a}-${b}-${c} i ${z}-${x}-${y} są równe
       `
   }

})
