// Desafio 10
function techList(tech, name) {
  let technologies = tech.sort();
  let list = [];
    for (const value of technologies) {
      let currentObject = {};
      currentObject['tech'] = value;
      currentObject['name'] = name;
      list.push(currentObject);
    }
    if (tech.length === 0) {
      return 'Vazio!'
    } else {
      return list;
    }
}

console.log(techList([], 'Lucas'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
