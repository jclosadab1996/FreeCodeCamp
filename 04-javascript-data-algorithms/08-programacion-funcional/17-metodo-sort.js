function alphabeticalOrder(arr) {
  // Cambia solo el código debajo de esta línea
  return arr.sort(function (a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
  // Cambia solo el código encima de esta línea
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
