import { divide, multiply, subtract, sum } from './math.js';
import {
  getOperatorFromString,
  isCalculatorButton,
  isClearButton,
  isOperatorButton,
  isResultButton
} from './mathUtils.js';

function getCalculatorBody() {
  return document.querySelector('.calculator-body');
}

function getDisplayField() {
  return document.querySelector('#calculator-display');
}

function getDisplayValue() {
  return getDisplayField().value;
}

function setDisplayValue(newValue) {
  getDisplayField().value = newValue;
}

function getCurrentOperation() {
  const currentValue = getDisplayValue();
  const operator = getOperatorFromString(currentValue);
  const [numberA, numberB] = currentValue.split(operator);
  return {
    operator,
    numberA: Number(numberA),
    numberB: Number(numberB || numberA)
  };
}

function setValue(newValue) {
  const oldValue = getDisplayValue();
  if (oldValue === '0') {
    setDisplayValue(newValue);
  } else {
    setDisplayValue(`${oldValue}${newValue}`);
  }
}

function clearValue() {
  setDisplayValue(0);
}

function setResult() {
  const operation = getCurrentOperation();

  if (!operation.operator) {
    return;
  }

  let result = 0;
  switch (operation.operator) {
    case '/':
      result = divide(operation.numberA, operation.numberB);
      break;
    case 'x':
      result = multiply(operation.numberA, operation.numberB);
      break;
    case '-':
      result = subtract(operation.numberA, operation.numberB);
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

function setOperator(newOperator) {
  let newValue;
  const currentValue = getDisplayValue();
  const oldOperator = getOperatorFromString(currentValue);
  if (oldOperator) {
    newValue = currentValue.replace(oldOperator, newOperator);
  } else {
    newValue = `${currentValue}${newOperator}`;
  }
  setDisplayValue(newValue);
}

function calculate(newAction) {
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
