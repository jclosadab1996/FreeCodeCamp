// Función que retorna una cadena de texto representando una taza de té verde
const prepareGreenTea = () => "greenTea";

// Función que retorna una cadena de texto representando una taza de té negro
const prepareBlackTea = () => "blackTea";

/*
Dada una función (representando el tipo de té) y el número de tazas necesarias, la 
    siguiente función retorna un arreglo de cadenas de texto (cada una representando un tipo específico de té).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Cambia solo el código debajo de esta línea
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Cambia solo el código encima de esta línea

console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);
