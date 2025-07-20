// La variable global
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

// Cambia el código debajo de esta línea
function add(list, bookName) {
  return [...list, bookName];
}

// Cambia el código debajo de esta línea
function remove(list, bookName) {
  return list.filter((book) => book !== bookName);
}

const newBookList = add(bookList, "A Brief History of Time");
const newerBookList = remove(
  bookList,
  "On The Electrodynamics of Moving Bodies"
);
const newestBookList = remove(
  add(bookList, "A Brief History of Time"),
  "On The Electrodynamics of Moving Bodies"
);

console.log(bookList);
