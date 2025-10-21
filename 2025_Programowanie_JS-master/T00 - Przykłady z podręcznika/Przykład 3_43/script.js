//Przykład 3_43

let osoba = {
    nazwisko: "Nowacki",
    imie: "Marek",
    zawod: "informatyk",
    pokaz: function (){
        document.write(this.nazwisko+ ' '+ this.imie);
    }
}
// wywołanie metody pokaz obiektu osoba
osoba.pokaz();