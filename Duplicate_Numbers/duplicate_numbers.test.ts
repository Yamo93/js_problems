import { hasDuplicate } from './duplicate_numbers';

test('should return true if given [1, 2, 3, 1]', () => {
    expect(hasDuplicate([1, 2, 3, 1])).toBe(true);
});

test('should return false if given [3, 1]', () => {
    expect(hasDuplicate([3, 1])).toBe(false);
});

test('should return true if given [0, 4, 5, 0, 3, 6]', () => {
    expect(hasDuplicate([0, 4, 5, 0, 3, 6])).toBe(true);
});
