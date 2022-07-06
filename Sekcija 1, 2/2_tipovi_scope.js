// primitivni i referenti tipovi vrednosti
// primitivne vrednosti su one koje se cuvaju direktno u varijablama
// referentne vrednosti su sve vrednosti koje nisu primitivne - svi objekti

// postoji 7 tipova primitivnih vrednosti
//      number, string, boolean, null, undefined, bigInt, symbol

// kopiranje primitivnih vrednosti
//   kopiranje se vrsi po njihovoj vrednosti
// obe vrednosti su na dve razlicite memorisjke lokacije ali varijable drze dve razlicite instance vrednosti 5
// potpuno su nezavisne jedna od druge
let a = 5;
let b = a;

a = 10;
console.log(b); // 5

// objekti su referentni tipovi vrednosti
// oni se takodje cuvaju u memoriji ali same varijable cuvaju njihove reference (memorijska adresa)
// kopiranjem objekata u drugu varijablu se zapravo kopira njegova referenca
// sto znaci da onda obe varijable pristupaju istom objektu i mogu da prave promene koje ce se videti iz one druge varijable
let obj = {a: 5};
let obj2 = obj;

obj2.greet = "hi";
obj.greet; // hi

// kada napravimo dva ista objekta i damo razlicitim varijablama, ti objekti ce biti razliciti objekti
// iako izgledaju isto, oba niza imaju razlicitu referencu 
let arr1 = [1, 2];
let arr2 = [1, 2];
arr1 === arr2; // false

arr1[2] = 5;
arr2[2]; // undefined

//=====================================================================================

// Globalni (window), lokalni (function) i blok scope

// Scope se moze zamisliti kao registar u kome se cuvaju varijable i funkcije, da bi mogle da se koriste u samom programu
// Scope se koristi da JS odredi koji deo koda ima pristup kojim varijablama

let global = "Globalni scope";

function myFunc() {
    let local = "Lokalni scope";

    console.log(global);
    console.log(local);
}

myFunc(); // Globalni scope, Lokalni scope
console.log(local); // ReferenceError

// Scope-ovanje nam daje enkapsulaciju podataka (privatne podatke) na samom nivou jezika
// myFunc ima pristup i svom scope-u i globalnom (child-parent-...)
// Globalni scope nema pristup lokalnim scope-ovima (psrent x child x...)

// Blok scope cini vecina blokova koda, makar to bile samo {}:
{
    let blok = "Block scope";
}

console.log(blok); // ReferenceError