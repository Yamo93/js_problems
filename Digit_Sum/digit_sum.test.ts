import { digitNum } from './digit_sum';

test('should return 14 if given \'2 apples, 12 oranges\'', () => {
    expect(digitNum('2 apples, 12 oranges')).toBe(14);
});

test('should return 123450 if given \'123450\'', () => {
    expect(digitNum('123450')).toBe(123450);
});

test('should return 0 if given \'Your payment method is invalid\'', () => {
    expect(digitNum('Your payment method is invalid')).toBe(0);
});