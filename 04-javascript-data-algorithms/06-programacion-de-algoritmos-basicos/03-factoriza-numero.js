function factorialize(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}

factorialize(5);

// Respuesta 2
//function factorialize(num) {
// if (num <= 0) {
//   return 1;
// }
// return num * factorialize(num - 1);
//}

factorialize(5);

// Respuesta 3
// function factorialize(num, factorial = 1) {
//  if (num <= 0) {
//    return factorial;
//  } else {
//    return factorialize(num - 1, factorial * num);
//  }
//}

factorialize(5);
