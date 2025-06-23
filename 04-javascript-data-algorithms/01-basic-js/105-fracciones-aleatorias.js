function randomFraction() {
  // Cambia solo el código debajo de esta línea

  let result = 0;
  // Math.random() can generate 0. We don't want to     return a 0,
  // so keep generating random numbers until we get one     that isn't 0
  while (result === 0) {
    result = Math.random();
  }

  return result;
  // Cambia solo el código encima de esta línea
}
