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

// Desafio 11
function generatePhoneNumber(numbers) {
  let sizeError = false;
  let valueError = false;
  let telephoneNumber = '(' + numbers[0] + numbers[1] + ') ' +
    numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] +
    '-' + numbers[7] + numbers[8] + numbers[9] + numbers[10];
  for (let index = 0; index < numbers.length; index += 1) {
    valueError = numbers[index] > 9 ? true :
    numbers[index] < 0 ? true : valueError;
  }
  for (let value = 0; value < 10; value += 1) {
    let repeats = 0;
    for (let index = 0; index < numbers.length; index += 1) {
      repeats += 1 * (value == numbers[index]);
    }
    if (repeats >= 3) {
      valueError = true;
    }
  }
  if (numbers.length !== 11) {
    sizeError = true;
  }
  if (sizeError) {
    return 'Array com tamanho incorreto.';
  } else if (valueError) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else {
    return telephoneNumber;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let logicalA = lineA > 0 ? true : false;
  let logicalB = lineB > 0 ? true : false;
  let logicalC = lineC > 0 ? true : false;
  logicalA = (lineA > lineB + lineC) ? false :
    (lineA < Math.abs(lineB - lineC)) ? false : logicalA;
  logicalB = (lineB > lineA + lineC) ? false :
    (lineB < Math.abs(lineA - lineC)) ? false : logicalB;
  logicalC = (lineC > lineA + lineB) ? false :
    (lineC < Math.abs(lineA - lineB)) ? false : logicalC;
  return (logicalA && logicalB && logicalC);
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
