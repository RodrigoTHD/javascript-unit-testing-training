import { FC } from 'react';
import { CalculatorTitleProps } from './types';
import './CalculatorTitle.css';

export const CalculatorTitle: FC<CalculatorTitleProps> = props => {
  const { text = 'Calculator' } = props;
  return <div className='calculator-title'>{text}</div>;
};
