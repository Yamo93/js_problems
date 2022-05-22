import { factorialize } from './factorialize';

test('should return 120 if given 5', () => {
    expect(factorialize(5)).toBe(120);
});

test('should return 24 if given 4', () => {
    expect(factorialize(4)).toBe(24);
});

test('should return 1 if given 0', () => {
    expect(factorialize(0)).toBe(1);
});

test('should return 3628800 if given 10', () => {
    expect(factorialize(10)).toBe(3628800);
});
