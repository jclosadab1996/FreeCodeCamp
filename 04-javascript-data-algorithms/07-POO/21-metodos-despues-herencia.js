function Animal() {}
Animal.prototype.eat = () => {
  console.log("nom nom nom");
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = () => {
  console.log("Woof!");
};
// Cambia solo el código debajo de esta línea

// Cambia solo el código encima de esta línea

const beagle = new Dog();
beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"
