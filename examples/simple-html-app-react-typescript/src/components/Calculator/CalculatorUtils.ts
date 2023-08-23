import { divide, multiply, subtract, sum } from '../../utils/mathUtils';

const removeNumbersRegex = /\d/g;
const removeOperatorRegex = /\D/g;

export const calculatorButtons = [
  1,
  2,
  3,
  '/',
  4,
  5,
  6,
  'x',
  7,
  8,
  9,
  '-',
  'c',
  0,
  '=',
  '+'
];

export function isCalculatorButton(dom: HTMLElement) {
  return dom.classList.contains('cal-btn');
}

export function isOperatorButton(operator: string) {
  return ['/', 'x', '-', '+'].includes(operator);
}

export function isResultButton(operator: string) {
  return operator === '=';
}

export function isClearButton(operator: string) {
  return operator === 'c';
}

export function getOperatorFromString(value: string) {
  return String(value).replace(removeNumbersRegex, '');
}

export function getNumberFromString(value: string) {
  return String(value).replace(removeOperatorRegex, '');
}

export function getCurrentOperation(displayValue: string): {
  operator: string;
  numberA: number;
  numberB: number;
} {
  const operator = getOperatorFromString(displayValue);
  const [numberA, numberB] = displayValue.split(operator);
  return {
    operator,
    numberA: Number(numberA),
    numberB: Number(numberB || numberA)
  };
}

export function getResult(displayValue: string) {
  const operation = getCurrentOperation(displayValue);

  if (!operation.operator) {
    return displayValue;
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

  return isNaN(result) ? 0 : result;
}

export function updateOperator(displayValue: string, newOperator?: string) {
  let newDisplayValue;
  if (newOperator) {
    const oldOperator = getOperatorFromString(String(displayValue));
    if (oldOperator) {
      newDisplayValue = String(displayValue).replace(oldOperator, newOperator);
    } else {
      newDisplayValue = `${displayValue}${newOperator}`;
    }
  }
  return newDisplayValue || displayValue;
}

export function updateValue(displayValue: string | number, newValue: string) {
  if (displayValue === '0') {
    return newValue;
  } else {
    return `${displayValue}${newValue}`;
  }
}

export const calculate = (displayValue: string, newAction: string) => {
  let newDisplayValue;
  if (isOperatorButton(newAction)) {
    newDisplayValue = updateOperator(displayValue, newAction);
  } else if (isClearButton(newAction)) {
    newDisplayValue = 0;
  } else if (isResultButton(newAction)) {
    newDisplayValue = getResult(displayValue);
  } else {
    newDisplayValue = updateValue(displayValue, newAction);
  }
  return newDisplayValue;
};
