// Cambia solo el código debajo de esta línea
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}
// Cambia solo el código encima de esta línea
