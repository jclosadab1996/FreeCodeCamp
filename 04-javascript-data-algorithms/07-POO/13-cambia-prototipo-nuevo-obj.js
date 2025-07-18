function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Cambia solo el código debajo de esta línea
  numLegs: 4,
  eat: () => {
    console.log("Nom Nom");
  },
  describe: () => {
    console.log("My name is " + this.name);
  },
};
