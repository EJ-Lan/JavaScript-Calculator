import { add, subtract, multiply, divide } from '../scripts/math.js';

describe('math operations', () => {
  test('adds two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('subtracts two numbers', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('multiplies two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('divides two numbers', () => {
    expect(divide(12, 4)).toBe(3);
    expect(divide(5, 0)).toBe('Cannot divide by zero');
  });
});