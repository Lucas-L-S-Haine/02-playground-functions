// Desafio 1
function compareTrue(logical1, logical2) {
  return logical1 && logical2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let divisions = [0];
  for (let letter = 0; letter < sentence.length; letter += 1) {
    if (sentence[letter] === ' ') {
      divisions.push(letter);
      divisions.push(letter + 1);
    }
  }
  divisions.push(sentence.length);
  let phrases = {};
  for (let index = 0; index < divisions.length; index += 2) {
    phrases[index] = sentence.slice(divisions[index], divisions[index + 1]);
  }
  let finalSentence = [];
  for (const key in phrases) {
    finalSentence.push(phrases[key]);
  }
  return finalSentence;
}

// Desafio 4
function concatName(fullName) {
  let name = [];
  name.push(fullName[0]);
  name.unshift(fullName[fullName.length - 1]);
  return name[0] + ', ' + name[1];
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(numbers) {
  let maximum = -Infinity;
  let count = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    maximum = Math.max(maximum, numbers[index]);
  }
  for (let index = 0; index < numbers.length; index += 1) {
    count += numbers[index] === maximum ? 1 : 0;
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = (cat1 - mouse)**2;
  let distance2 = (cat2 - mouse)**2;
  if (distance1 > distance2){
    return 'cat2';
  } else {
    if (distance2 > distance1){
      return 'cat1';
    } else {
      return 'os gatos trombam e o rato foge';
    }
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let matches = [];
  let words = [];
  for (const value of numbers) {
    matches.push(0);
  }
  for (const index in numbers) {
    matches[index] += (numbers[index] % 3 === 0);
    matches[index] += 2*(numbers[index] % 5 === 0);
  }
  for (let index = 0; index < numbers.length; index += 1) {
    switch (matches[index]) {
      case 1:
        words.push('fizz');
        break;
      case 2:
        words.push('buzz');
        break;
      case 3:
        words.push('fizzBuzz');
        break;
      default:
        words.push('bug!');
        break;
    }
  }
  return words;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
