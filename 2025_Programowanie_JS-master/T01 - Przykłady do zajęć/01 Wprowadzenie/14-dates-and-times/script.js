let d;

// Pobierz dzisiejszą datę i godzinę
d = new Date();

// Ustawienie na string
d = d.toString();

// Uzyskaj konkretną datę
// Ważne: miesiąc jest oparty na 0, więc 0 to styczeń, a 11 to grudzień
d = new Date(2021, 0, 10, 12, 30, 0);

// Przekaż ciąg
d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021 12:30:00');
d = new Date('2022-07-10');
d = new Date('07-10-2022');

// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

// Pobierz aktualny znacznik czasu
d = Date.now();

// Pobierz znacznik czasu określonej daty
d = new Date();
d = d.getTime();
d = d.valueOf();

// Utwórz datę ze znacznika czasu
d = new Date(1666962049745);

// Konwersja z milisekund na sekundy
d = Math.floor(Date.now() / 1000);

console.log(d);
