// objekat literal sintaksa (skracenica)
let person = {
  name: "Nila",
  age: 26,
};

// pristup vrednostima svojstava u objektu
// notacija tacke (property accessor)
person.name; // Nila

// notacija uglastih zagrada []
// mocnija je od tacke
// moze da uzima vrednosti iz varijabli
// moze da imenuje svojstva sa 2+ reci
// a moze i property da se evaluira prvo kao izraz i onda setuje na objekat
person["name"]; // Nila
person["last name"] = "Boskonovich";

let fruit = "apple";
person[fruit] = "Computerz";

let plumber = "Mario";
let obj = {
  ["Super " + plumber]: 64,
};

// objekti mogu imati i metode
// greet: function() {...} je isto sto i greet() {...}
let niceObj = {
  greet: function () {},

  sayGoodbye() {},
};

//=====================================================================================

// "this" u objektima i svojstva objekata

// obj.metoda(), "this" se u funkcijama odnosi na objekat sa leve strane (.)
// Ako tog objekta nema, "this" u "sloppy" JS modu ce biti default-ovan na window
// console.log(this) u "use strict" modu ce i dalje pokazivati na window
// U nekoj nasoj funkciji, "this" u "use strict" modu ce biti undefined, ako nam ta funkcija nije metoda nekog objekta
// this.prop unutar metode funkcije se odnosi na svojstvo "prop" tog objekta, gde je "this" taj objekat

//=====================================================================================

// Object.create() static metoda

// Object.create() nam dozvoljava da napravimo novi objekat sa datim prototipom
// ako damo null, napravice se cist objekat bez ijednog prototipa
let o = Object.create(null);

//=====================================================================================

// Object() konstruktor funkcija

// Novi objekat se moze kreirati sa new Object()
// Bilo koju vrednost mu dajemo kao argument i on ce od toga napraviti objekat, tog tipa vrednosti
// Dati null ili undefined (ili ostaviti prazno) kreiraju prazan objekat
let k = new Object(undefined);
console.log(k);

//=====================================================================================

// Prototipovi

// JS radi na principu prototipskog nasledjivanja
// Svi objekti (cak i primitivne vrednosti OSIM null i undefined), imaju neke metode i svojstva
// Kada pokusamo da im pristupimo (ili pozovemo metodu) a nisu direktno definisane na tim objektima, JS ce poceti da proverava prototipski lanac tog objekta, raditi lookup unazad
// obj -> obj__proto__ -> obj.__proto__.__proto__ -> ...
// znaci, nas obj, pa onda prototip obj, pa prototit tog prototipa obj..., sve dok ne stigne do Object.prototype
// Object.prototype je posednji prototip u svakom lancu jer posle njega ima samo null vrednost -> to je kraj lanca
// Svi objekti (i primitivne vrednosti) imaju Object.prototype na kraju prototipskog lanca
// null i undefined su jedine primitivne vrednosti koje nemaju svoje konstruktore, odnosno nemaju ni svojstva ni metode
// To znaci i da null i undefined nemaju svoje prototipske lance

//=====================================================================================

// __proto__ i Object.getPrototypeOf(obj)

// __proto__ je getter i setter za prototip objekta i postoji u JS-u iz istorisjkih razloga
// __proto__ nije "prototype" svojstvo na funkcijama
// __proto__ se moze koristi za testiranje i nase projekte ali getPrototypeOf(obj) staticna metoda da se koristi u produkcionom kodu

//=====================================================================================

// Custom konstruktor funkcije

// Konstruktor funkcije su sabloni za kreiranje objekata sa istom strukturom, samo drugim parametrima
// Nema razlike izmedju konstruktor i normalnih funkcija, sve su funkcije
// Konstruktori treba da se pozivaju sa operatorom "new" i on radi par stvari:
//    1. kreira prazan objekat i stavlja vrednost "this" = {} (taj objekat)
//    2. Prorotip novog objekta postaje Konstruktor.prototype
// Onda se telo kostruktor funkcije izvrsava liniju po liniju, gde je unutar konstruktora "this" taj novi objekat
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person = new Person("Nick", 20);
person.whatsThis = function (who) {
  console.log(who + this);
};

// Sve funkcije imaju Fn.prototype objekat
// U nasem slucaju, mi Person.prototype mozemo napuniti sa svojstvima i metodama koje ne treba biti individualno na objektima nego mogu biti nasledjene
// To je uglavnom tacno za metode, gde se individualna svojstva (sa njihovim vrednostima) kreiraju direktno na objektima

//=====================================================================================

// bind(), call() i apply() metode

// bind() metoda nam daje da vezemo "this" unutar funkcije, da bi "this" ostao isti bez obzira kako pozivamo tu funkciju nadalje
// bind() metoda takodje pravi novu funkciju, ne menja staru
// ako metoda koju vezujemo prima neke argumente, mozemo i njih da prosledimo bind metodi preko bind(thisObj, arg1, arg2, ...argN);
// u tom slucaju (prosledjeni argumenti), pozvana funkcija ce se uvek pozivati sa tim "this"-om i tim argumentom
let newPerson = new Person("This", 20);
newPerson.thatMethod = person.whatsThis.bind(person, "Eyo");

// call(thisObj, arg1, arg2, ...argN) radi isto sto i bind(), samo poziva funkciju odmah
// call() metoda samo poziva funkciju, ne pravi novu
person.whatsThis.call(newPerson, "Me");

// apply(thisObj, [arg1, arg2, ...argN]) radi isto sto i call()
// samo prima niz kao drugi argumenat, niz svih argumenata koju funkcija prima
// apply metoda takodje poziva funkciju
person.whatsThis.apply(newPerson, ["Hey"]);

//=====================================================================================

// defineProperty() staticna metoda

// Object.defineProperty(obj, propObj) je mocnije verzija (.), gde imamo jos dodatnih opcija za dodatu metodu
// Npr, mozemo definisati getter i/ili setter, vrednost, i flagove: writable, enumerable, configurable
// NAPOMENA:
// Svojstva u objektu mogu biti tipa DATA i ACCESSOR
//    Data svojstva su ona koja imaju "value"

//    Accessor svojstva su ona koja imaju funkcije get() i/ili set()
// Svojstvo ne moze istovremeno biti i data i accessor svojstvo!

let account = {
  cash: 16000,
  withdraw(amount) {
    this.cash -= amount;
    console.log(`Withdrew ${amount}, you have ${this.cash} on your account.`);
  },
};

Object.defineProperty(account, "deposit", {
  value: function (amount) {
    this.cash += amount;
  },
});

account.deposit(3000);
account.withdraw(1000);
