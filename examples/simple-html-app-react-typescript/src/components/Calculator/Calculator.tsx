import { FC, MouseEvent, useState } from 'react';
import './Calculator.css';
import { CalculatorButton } from '../CalculatorButton';
import { CalculatorDisplay } from '../CalculatorDisplay';
import { CalculatorTitle } from '../CalculatorTitle';
import {
  calculate,
  calculatorButtons,
  isCalculatorButton
} from './CalculatorUtils';

export const Calculator: FC = () => {
  const [displayValue, setDisplayValue] = useState<string | number>('0');

  const handleBodyClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    var target = e.target as HTMLInputElement;
    if (isCalculatorButton(target)) {
      const newDisplayValue = calculate(String(displayValue), target.value);
      setDisplayValue(newDisplayValue);
    }
  };

  const handleCalculatorDisplayValueChange = (newValue: string) => {
    setDisplayValue(newValue);
  };

  return (
    <div className='calculator'>
      <div className='calculator-header'>
        <CalculatorTitle />
        <CalculatorDisplay
          value={displayValue}
          onChange={handleCalculatorDisplayValueChange}
        />
      </div>
      <div className='calculator-body' onClick={handleBodyClick}>
        {calculatorButtons.map(buttonText => (
          <CalculatorButton key={buttonText} text={buttonText} />
        ))}
      </div>
    </div>
  );
};
