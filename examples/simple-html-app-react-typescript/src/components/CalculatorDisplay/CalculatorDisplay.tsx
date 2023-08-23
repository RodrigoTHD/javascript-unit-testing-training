import { ChangeEvent, FC } from 'react';
import { CalculatorDisplayProps } from './types';
import './CalculatorDisplay.css';

export const CalculatorDisplay: FC<CalculatorDisplayProps> = props => {
  const { value, onChange } = props;

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    onChange && onChange(e.target.value);
  }

  return (
    <input
      type='text'
      id='calculator-display'
      value={value}
      onChange={handleChange}
    />
  );
};
