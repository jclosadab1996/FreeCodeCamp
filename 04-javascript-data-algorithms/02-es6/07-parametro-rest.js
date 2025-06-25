const sum = (...args) => {
  // ...args es un parametro rest que permite pasar un numero indefinido de argumentos
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};
