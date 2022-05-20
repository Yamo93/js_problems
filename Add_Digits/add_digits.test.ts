import { addUpDigits } from './add_digits';

test('should return 11 if given 29', () => {
    expect(addUpDigits(29)).toBe(11);
});

test('should return 12 if given 48', () => {
    expect(addUpDigits(48)).toBe(12);
});

test('should return 15 if given 96', () => {
    expect(addUpDigits(96)).toBe(15);
});

test('should return 1 if given 10', () => {
    expect(addUpDigits(10)).toBe(1);
});