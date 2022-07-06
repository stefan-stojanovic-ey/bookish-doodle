function calc(num1, num2) {
    var inside = "Scoped inside the function"
    console.log(inside);
    return num1 + num2;
}

// parametri funkcije su placeholderi za prave podatke sa kojima funkcija moze biti pozvana
// argumenti funkcije su pravi podaci koji su prosledjeni funkciji
// ako definisemo parametre a ne prosledimo argumente, unutar funkcije ce oni biti "undefined"
calc(1, 2); // 3
// console.log(inside); // ReferenceError: varijabla inside nije definisana u trenutnom scope-u (na globalnom nivou)

// varijabla "inside", iako je deklarisana sa var, ce biti vidljiva samo unutar funkcije
// kljucna rec "var" se scope-uje na nivou funkcije ili na globalnom nivou
// let i const imaju i block scope, i zato se ove deklaracije skoro uvek koriste

//=====================================================================================

// if iskaz nam omogucava da granamo nas kod
//i da izvrsimo jednu od tih grana, za dati uslov
// if ..else if.. else iskaz ima jedan glavni blok (if)
// else if.. i else su opcionalni blokovi
// else if mora imati uslov kao if, dok else nema uslov
let condition = true;
let cond = true;

if (condition) {
    // kod se izvrsava za condition === true
} else if (cond) {
    // bice izvrsen za cond === true + ako i samo ako if/predhodni else if nije bio izvrsen

} else {
    // ovaj kod ce biti izvrsen ako if i svi else if pre njega nisu bili izvrseni
}

// proveravanje da li je izraz true / false se radi u uslovu za if.. else if
// ako prosledimo druge vrednosti, bice "prisiljene" u boolean vrednosti, samo za proveru uslova

// Samo vrednosti 1 i 0 se mogu direktno prevesti u true (1) / false (0)
// Ostale vrednosti se tretiraju kao true (truthy) i samo par kao false (falsy) vrednosti
// Ima samo 5 falsy vrednosti:
    // 0
    // null
    // undefined
    // ""
    // NaN

//=====================================================================================

// switch iskaz je kao zamena za if.. else if.. else iskaz, lepo struktuiran kod
// kao i if.. else if.. else iskaz, i switch moze biti prazan ali kod unutar mora imati makar jedan case ili default - nije obican code blok

// switch proverava varijablu i case sa ===, tako da moraju biti istog tipa i ista vrednost
// izvrsava se kode za onaj case koji je nadjen prvi, pod uslovom da postoji "break"
// ako "break" nije prisutan, izvrsavanje koda ce "propasti" do sledeceg case-a, itd.
// u tom slucaju, izvrsavanje koda ce se zaustaviti ili na samom kraju switch bloka ili do prvog sledeceg "break"-a
// kod ce poceti da "propada" od prvog nadjenog case-a pa na dalje, dok ce ostali case-ovi ispod biti zanemareni (njihovi uslovi se ne proveravaju)
let luckyNum = 8;

switch (luckyNum) {
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    case 4:
        console.log("4");
        break;
    default:
        console.log("Default case");
        break;
}


//=====================================================================================

// petlje su jedini nacin u JS-u kako mozemo da ponovimo jedan deo koda vise puta, a da ga ne pisemo kao duplikate