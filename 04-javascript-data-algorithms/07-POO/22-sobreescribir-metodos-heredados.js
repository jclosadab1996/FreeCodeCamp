function Bird() {}

Bird.prototype.fly = () => "I am flying!";

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Cambia solo el código debajo de esta línea
Penguin.prototype.fly = () => "Alas, this is a flightless bird.";

// Cambia solo el código encima de esta línea

const penguin = new Penguin();
console.log(penguin.fly());
