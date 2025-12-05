let czolg = {
    Nazwa: "The Roller",
    Kolor: "Biały",
    Ilosc_amunicji: 63,

    wyswietlDane: function() {
        let tekst =
            "<strong>Dane Czołgu:</strong><br>" +
            "Nazwa: " + this.Nazwa + "<br>" +
            "Kolor: " + this.Kolor + "<br>" +
            "Ilość_amunicji: " + this.Ilosc_amunicji ;

        document.getElementById("wynik").innerHTML += tekst;
    }
};
czolg.wyswietlDane();
info()

function info() {
    console.log(`Czołg: ${czolg.Nazwa}, kolor: ${czolg.Kolor}, amunicja: ${czolg.Ilosc_amunicji}`);
}
pomaluj("czerwony")
function pomaluj(nowyKolor) {
    czolg.Kolor = nowyKolor;
    console.log(`Czołg został przemalowany na kolor: ${nowyKolor}`);
}
strzelaj()
strzelaj()
strzelaj()
strzelaj()
strzelaj()
strzelaj()
zaladuj(3)
function zaladuj(ilosc) {
    czolg.Ilosc_amunicji += ilosc;
    console.log(`Załadowano ${ilosc} pocisków. Aktualna amunicja: ${czolg.Ilosc_amunicji}`);
}

function strzelaj() {
    if (czolg.Ilosc_amunicji > 0) {
        czolg.Ilosc_amunicji--;
        console.log(`Boom! Oddano strzał. Pozostała amunicja: ${czolg.Ilosc_amunicji}`);
    } else {
        console.log("Brak amunicji! Nie można oddać strzału.");
    }
}



