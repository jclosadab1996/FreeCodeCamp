const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Cambia solo el código debajo de esta línea
  return [].concat(arr).sort(function (a, b) {
    return a - b;
  });

  // Cambia solo el código encima de esta línea
}

nonMutatingSort(globalArray);
