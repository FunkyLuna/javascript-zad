// Przyklad 3.46
function Klient(nazwisko_k, imie_k, zawod_k) {
    this.nazwisko = nazwisko_k;
    this.imie = imie_k;
    this.zawod = zawod_k;
    this.wypisz = function() {
        console.log(this.nazwisko + ' ' + this.imie);
    }
}

//Przykład 3.47

let osoba1 = new Klient('Kowalski', 'Jan', 'kierowca');
let osoba2 = new Klient('Nowak', 'Anna', 'sekretarka');