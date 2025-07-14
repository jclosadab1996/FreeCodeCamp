const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(allUsers) {
  // Cambia solo el código debajo de esta línea
  let result = 0;
  for (let user in allUsers) {
    if (allUsers[user].online === true) {
      result++;
    }
  }
  return result;
  // Cambia solo el código encima de esta línea
}

console.log(countOnline(users));
