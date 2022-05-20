import { amendSentence } from './amend_sentence';

test('should return \'coding dude does work son\' if given \'CodingDudeDoesWorkSon\'', () => {
    expect(amendSentence('CodingDudeDoesWorkSon')).toBe('coding dude does work son');
});

test('should return \'ain\'t no fun if the homie don\'t code none\' if given \'Ain\'tNoFunIfTheHomieDon\'tCodeNone\'', () => {
    expect(amendSentence('Ain\'tNoFunIfTheHomieDon\'tCodeNone')).toBe('ain\'t no fun if the homie don\'t code none');
});
