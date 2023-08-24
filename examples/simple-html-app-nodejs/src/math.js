export function sum(numberA, numberB) {
  return numberA + numberB;
}

export function subtract(numberA, numberB) {
  return numberA - numberB;
}

export function divide(numberA, numberB) {
  return numberA / numberB;
}

export function multiply(numberA, numberB) {
  return numberA * numberB;
}

export function addNumber(numbersList) {
  if (!Array.isArray(numbersList)) {
    throw new Error('numbersList should be array');
  }

  let result = 0;
  numbersList.forEach(number => {
    result = result + number;
  });

  return result;
}
