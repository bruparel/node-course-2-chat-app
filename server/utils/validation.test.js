var expect = require('expect');

var { isRealString } = require('./validation')

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var notString = 123;
    var retBoolean = isRealString(notString)

    expect(retBoolean).toBeA('boolean');
    expect(retBoolean).toBeFalsy()
  });

  it('should reject string with only spaces', () => {
    var onlySpaces = '     ';
    var retBoolean = isRealString(onlySpaces)

    expect(retBoolean).toBeA('boolean');
    expect(retBoolean).toBeFalsy()
  });

  it('should allow string with non-space characters', () => {
    var realString = 'stuff';
    var retBoolean = isRealString(realString)

    expect(retBoolean).toBeA('boolean');
    expect(retBoolean).toBeTruthy()
  });
});