import { addNumber, divide, multiply, subtract, sum } from './math.js';

// function test1() {}

// test('description', test1)

// test('description', () => {});

describe('math', () => {
  const numberA = 5;
  const numberB = 5;

  describe('sum', () => {
    it('should calculate values', () => {
      // act, assert
      const result = sum(numberA, numberB);
      // assert
      expect(result).toBe(10);
    });
  });

  it('should divide calculate values', () => {
    const result = divide(numberA, numberB);
    expect(result).toBe(1);
  });

  it('should multiply calculate values', () => {
    const result = multiply(10, 2);
    expect(result).toBe(20);
  });

  it('should subtract calculate values', () => {
    const result = subtract(10, 2);
    expect(result).toBe(8);
  });
});

describe('addNumber / TDD', () => {
  it('should addNumber add sum number', () => {
    // arrange
    const numbers = [1, 2, 3, 4, 5];
    // act
    const result = addNumber(numbers);
    // assert
    expect(result).toBe(15);
  });

  it('should addNumber add sum number with throw', () => {
    // act, expect
    expect(() => {
      addNumber(1, 2);
    }).toThrow(/numbersList should be array/);
  });
});
