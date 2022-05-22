import { findOdd } from './finding';

test('should return 5 if given [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]', () => {
    expect(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])).toBe(5);
});

test('should return -1 if given [1,1,2,-2,5,2,4,4,-1,-2,5]', () => {
    expect(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])).toBe(-1);
});