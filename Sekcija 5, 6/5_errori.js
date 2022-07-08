// try, catch, finally

// da bi "try catch" radio, napisani kod mora biti validan JS kod
// ove greske koje se hvataju se zovu "runtime" error-i a ne "parse-time" error-i
// "parse-time" error-i

// Se koristi za hvatanje error-a u kodu, onih koje ne mozemo da predvidimo
// "try, catch" blok omogucava da se nosimo sa tim error-om a da program ne pukne
// "catch" bloku se prosledjuje error objekat ("err" parametar je samo naziv)
// "try, catch" blokovi su obavezni dok je "finally" opcionalan

// error objekat ima "name", "message" i "stack" svojstva
// ona opisuju gresku koja se uhvati i prosledi "catch" bloku

// "try catch" radi sinhrono sto znaci da "err" u setTimeout()-u nece biti uhvacen
// osim ako u samom setTimeout()-u ne stavimo "try catch" blok
//

try {
  // probaj neki kod
  // ako dodje do error-a, zaustavi dalje izvrsavanje u "try" bloku i idi na "catch"
} catch (error) {
} finally {
  // opcionalan blok
  // ovde se kod izvrsava u svakom slucaju,
  // da li je upao u "catch" ili izvrsio ceo "try" blok
}

// bez error-a
try {
  console.log("Uradi ovo");
  // nema error-a
  console.log("Nema error-a");
} catch (err) {
  // nece se izvrsiti
  console.log("Ignorisemo catch posto nema error-a");
}

console.log("Idemo dalje...");

// Sa error-om
try {
  console.log("Probaj ovo...");
  lalala; // error je ovde
  console.log("Kraj 'try' bloka, ovo se nece procitati...");
} catch (err) {
  console.log(`Evo ga error: `, err);
}

console.log("Error je uhvacen, idemo dalje...");

// "finally" blok se izvrsava uvek
