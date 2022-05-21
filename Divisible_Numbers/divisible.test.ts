import { divisible } from './divisible';

test('should return 195 if given 30', () => {
    expect(divisible(30)).toBe(195);
});

test('should return 23 if given 10', () => {
    expect(divisible(10)).toBe(23);
});

test('should return 3 if given 5', () => {
    expect(divisible(5)).toBe(3);
});

test('should return 0 if given -5', () => {
    expect(divisible(-5)).toBe(0);
});