function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

function Dog() {}

// Cambia solo el código debajo de esta línea
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();
