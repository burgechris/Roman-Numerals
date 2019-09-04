import { converter } from './../src/scripts.js';

describe('Roman_Numeral', function() {

  it('should test whether value entered is a numerical value', function() {
      var number = 1;
      expect(Number.isInteger(number)).toEqual(true);
      });

  it('should test whether the value entered is on the roman numeral chart', function() {
      var number = 1;
      var romanNumeralString = '';
      expect(converter(number, romanNumeralString)).toEqual('I')
    });

    it('should test whether letters are ordered correctly based on value', function() {
        var number = 36;
        var romanNumeralString = '';
        expect(converter(number, romanNumeralString)).toEqual('XXXVI')
      });
});
