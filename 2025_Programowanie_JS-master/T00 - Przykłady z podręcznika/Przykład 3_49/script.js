//przyklad 3.49
function Klient(nazwisko, imie) {
    this.nazwisko_k = nazwisko;
    this.imie_k = imie;
}
Klient.prototype.zawod = 'kierowca';
Klient.prototype.pisz_dane = function() {
    console.log(this.nazwisko_k + ' ' + this.imie_k);
}
let osoba1 = new Klient("Malinowski", "Oskar", "kierowca");
osoba1.pisz_dane();