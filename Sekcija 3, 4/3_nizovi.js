// forEach metoda je zamena za for petlju koja primenjuje callback funkciju na svaki element niza
// callback funkcija prima najvise 3 parametra (element, index, niz na kome radi)
// vraca undefined
let arr = [1, 2, 3, 4];

arr.forEach((el, idx, arr) => console.log(el));

// metode push, pop, shift, unshift ubacuju ili uklanjaju elementa na kraj ili pocetak niza
//  .push       - dodaje na kraj niza, 1+ element       (vraca novu duzinu niza)
//  .unshift    - dodaje na pocetak niza, 1+ elemenat   (vraca novu duzinu niza)
//  . pop       - uklanja sa kraja niza, 1 element      (vraca uklonjeni elemenat)
//. .shift      - uklanja sa pocetka niza, 1 element    (vraca uklonjeni elemenat)

arr.push(12, 15); // 6 ([1, 2, 3, 4, 12, 15])
arr.pop(); //  15
arr.unshift(-10, -9); // 7
arr, shift(); // 6
console.log(arr);

// trazi index elementa u nizu
// vraca 0 <= arr.length-1, a ako ne nadje nista, -1
arr.indexOf(8); // -1

// vraca kopiju isecenog dela niza sa elementima izmedju
// ako se ne da start, secenje pocinje od 0
// ako se ne da end, sece se do kraja niza
// ako se daju negativni brojevi, to je offset od kraja niza (-2 je drugi od kraja elemenat)
arr.slice(start, end);

arr.splice();

// prima callback funkciju
// callback funkcija mora da vrati vrednost posle svake njene primene na elemenat
// vraca novi niz elemenata koji su prosli datu test funkciju
arr.filter((el) => el > 0);

// prima callback funkciju
// callback funkcija mora da vrati vrednost posle svake njene primene na elemenat
// vraca novi niz elemenata nad kojima je primenjena callback funkcija
arr.map((el) => el + 2);

// obrce niz u mestu (znaci, mutira ga)
// vraca referencu istog niza
arr.reverse();

// spaja 2 niza u jedan
// vraca novi niz
arr.concat(someArr);

// pretvara niz u string i argument mu je separator elemenata u novom stringu
// vraca novi string
arr.join(", ");

// akumulira niz na jednu vrednost (reduce-uje)
// prima 2 parametra, callback i pocetnu vrednost
// ako mu se ne da drugi parametar, uzima se vrednost pvog elementa niza za pocetnu
arr.reduce((total, val) => total + val, 0);
