import { FC } from 'react';
import { CalculatorButtonProps } from './types';
import './CalculatorButton.css';

export const CalculatorButton: FC<CalculatorButtonProps> = props => {
  const { text } = props;
  return <input type='button' className='cal-btn' value={text} />;
};
