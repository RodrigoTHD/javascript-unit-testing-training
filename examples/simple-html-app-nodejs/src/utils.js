import { divide, minus, multiply, sum } from './math.js';

const removeNumbersRegex = /\d/g;
const removeOperatorRegex = /\D/g;

export function getCalculatorBody() {
  return document.querySelector('.calculator-body');
}

export function isCalculatorButton(dom) {
  return dom.classList.contains('cal-btn');
}

export function isOperatorButton(value) {
  return ['/', 'x', '-', '+'].includes(value);
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

export function getDisplayField() {
  return document.querySelector('#display');
}

export function setDisplayValue(newValue) {
  getDisplayField().value = newValue;
}

export function getDisplayValue() {
  return getDisplayField().value;
}

export function getCurrentOperation() {
  const currentValue = getDisplayValue();
  const operator = getOperatorFromString(currentValue);
  const [numberA, numberB] = currentValue.split(operator);
  return {
    operator,
    numberA: Number(numberA),
    numberB: Number(numberB || numberA)
  };
}

export function setValue(newValue) {
  const oldValue = getDisplayValue();
  if (oldValue === '0') {
    setDisplayValue(newValue);
  } else {
    setDisplayValue(`${oldValue}${newValue}`);
  }
}

export function clearValue() {
  setDisplayValue(0);
}

export function setResult() {
  const operation = getCurrentOperation();
  let result = 0;
  switch (operation.operator) {
    case '/':
      result = divide(operation.numberA, operation.numberB);
      break;
    case 'x':
      result = multiply(operation.numberA, operation.numberB);
      break;
    case '-':
      result = minus(operation.numberA, operation.numberB);
      break;
    case '+':
      result = sum(operation.numberA, operation.numberB);
      break;
  }

  if (isNaN(result)) {
    setDisplayValue(0);
  } else {
    setDisplayValue(result);
  }
}

export function setOperator(newOperator) {
  let newValue;
  const oldValue = getDisplayValue();
  const oldOperator = getOperatorFromString(oldValue);
  if (oldOperator) {
    newValue = oldValue.replace(oldOperator, newOperator);
  } else {
    newValue = `${oldValue}${newOperator}`;
  }
  setDisplayValue(newValue);
}

export function calculate(newAction) {
  if (isOperatorButton(newAction)) {
    setOperator(newAction);
  } else if (isClearButton(newAction)) {
    clearValue();
  } else if (isResultButton(newAction)) {
    setResult();
  } else {
    setValue(newAction);
  }
}

function onCalculatorBodyClick(e) {
  var target = e.target;
  if (isCalculatorButton(target)) {
    e.preventDefault();
    e.stopPropagation();
    calculate(target.value);
  }
}

export function initCalculatorEvents() {
  const calculatorBody = getCalculatorBody();
  if (calculatorBody) {
    calculatorBody.addEventListener('click', onCalculatorBodyClick);
  }
}
