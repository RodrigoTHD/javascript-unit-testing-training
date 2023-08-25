import { render, screen } from '@testing-library/react';
import { CalculatorButton } from './CalculatorButton';

describe('CalculatorButton', () => {
  it('should render with text', () => {
    // act
    const { debug } = render(<CalculatorButton text={'button1'} />);

    // eslint-disable-next-line testing-library/no-debugging-utils
    debug();

    // assert
    expect(screen.getByText('button1')).toBeVisible();
    expect(screen.getByText('button1')).toBeDefined();
    expect(screen.getByText('button1')).toBeInTheDocument();
  });
});
