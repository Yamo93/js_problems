import { convertToFahrenheit } from './converting';

test('should return 86 if given 30', () => {
    expect(convertToFahrenheit(30)).toBe(86);
});

test('should return -22 if given -30', () => {
    expect(convertToFahrenheit(-30)).toBe(-22);
});