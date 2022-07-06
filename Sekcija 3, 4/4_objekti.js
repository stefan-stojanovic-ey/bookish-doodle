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
person["last name"] = "Boskonovic";

let fruit = "apple";
person[fruit] = "Computerz";

let plumber = "mario";
let obj = {
  ["Super" + plumber]: 64,
};

// objekti mogu imati i metode
// greed: function() {...} je isto sto i greet() {...}
let niceObj = {
  greet: function () {},

  sayGoodbye() {},
};
