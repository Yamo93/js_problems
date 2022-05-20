import { capitalize } from './capitalize';

test('should return \'I Am A Coding Dude\' if given \'I am a coding dude\'', () => {
    expect(capitalize('I am a coding dude')).toBe('I Am A Coding Dude');
});

test('should return \'I Would Like To Work For Google\' if given \'I would like to work for Google\'', () => {
    expect(capitalize('I would like to work for Google')).toBe('I Would Like To Work For Google');
});
