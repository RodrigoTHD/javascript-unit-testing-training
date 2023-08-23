const removeNumbersRegex = /\d/g;
const removeOperatorRegex = /\D/g;

export function isCalculatorButton(dom) {
  return dom.classList.contains('cal-btn');
}

export function isOperatorButton(operator) {
  return ['/', 'x', '-', '+'].includes(operator);
}

export function isResultButton(operator) {
  return operator === '=';
}

export function isClearButton(operator) {
  return operator === 'c';
}

export function getOperatorFromString(value) {
  return String(value).replace(removeNumbersRegex, '');
}

export function getNumberFromString(value) {
  return String(value).replace(removeOperatorRegex, '');
}
