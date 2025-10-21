const imie = document.querySelector('#imie');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
  let imie_text = imie.value;
  wynik.innerHTML =
      `
      <h1> Hoi Hoi  ${imie_text} !!! </h1>
      <h2>Weś się nie upij tylko!!!</h2>
            `
})