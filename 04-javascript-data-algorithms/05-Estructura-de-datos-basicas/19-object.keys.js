let users = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function getArrayOfUsers(obj) {
  // Cambia solo el código debajo de esta línea
  return Object.keys(obj);
  // Cambia solo el código encima de esta línea
}

console.log(getArrayOfUsers(users));
