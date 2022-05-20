import { addTwoNumbers } from './adding';

test('should return 11 if given 5 and 6', () => {
    expect(addTwoNumbers(5, 6)).toBe(11);
});

test('should return 12 if given 4 and 8', () => {
    expect(addTwoNumbers(4, 8)).toBe(12);
});

test('should return 15 if given 9 and 6', () => {
    expect(addTwoNumbers(9, 6)).toBe(15);
});

test('should return 1 if given 1 and 0', () => {
    expect(addTwoNumbers(1, 0)).toBe(1);
});