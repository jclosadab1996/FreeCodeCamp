const bird = {
  name: "Donald",
  numLegs: 2,
};

const boat = {
  name: "Warrior",
  type: "race-boat",
};

// Cambia solo el código debajo de esta línea
const glideMixin = (obj) => {
  obj.glide = () => {
    console.log("Gliding!");
  };
};
glideMixin(bird);
glideMixin(boat);
