import { filterList } from './filtering_list';

test('should return [1, 2] if given [1, 2, \'a\', \'b\']', () => {
    expect(filterList([1, 2, 'a', 'b'])).toEqual([1, 2]);
});

test('should return [] if given []', () => {
    expect(filterList([])).toEqual([]);
});

test('should return [] if given [\'a\']', () => {
    expect(filterList(['a'])).toEqual([]);
});

test('should return [true, 1, null] if given [\'a\', true, 1, null]', () => {
    expect(filterList(['a', true, 1, null])).toEqual([true, 1, null]);
});