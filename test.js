var omitKeys = require('./');
var describe = require('mocha').describe;
var should = require('should');

var noop = function () {};

var obj = {
  a: 2,
  b: 5,
  c: 10
};

describe('omit-keys', function () {
  it('should return empty object when the passed argument is invalid.', function () {
    omitKeys().should.deepEqual({});
    omitKeys('').should.deepEqual({});
    omitKeys(0).should.deepEqual({});
    omitKeys([]).should.deepEqual({});
    omitKeys(null).should.deepEqual({});
    omitKeys(NaN).should.deepEqual({});
    omitKeys(noop).should.deepEqual({});
  });

  it('should return the object when there is no filter passed.', function () {
    omitKeys(obj).should.deepEqual(obj);
  });

  it('should return the object removing the passed key.', function () {
    var omit = 'a';
    omitKeys(obj, omit).should.deepEqual({
      b: 5,
      c: 10
    });
  });

  it('should return the object removing the passed keys.', function () {
    var omit = ['b'];
    omitKeys(obj, omit).should.deepEqual({
      a: 2,
      c: 10
    });
  });

  it('should return the object removing the passed keys.', function () {
    var omit = ['a', 'b'];
    omitKeys(obj, omit).should.deepEqual({
      c: 10
    });
  });

  it('should return the object removing the keys using the callback by value.', function () {
    var fn = function (value) {
      return value === 2;
    };

    omitKeys(obj, fn).should.deepEqual({
      a: 2
    });
  });

  it('should return the object removing the keys using the callback by key.', function () {
    var fn = function (_, key) {
      return key === 'a';
    };

    omitKeys(obj, fn).should.deepEqual({
      a: 2
    });
  });

  it('should return the object removing the keys using the callback.', function () {
    var fn = function (_, key, object) {
      var keys = Object.keys(object);

      return keys.indexOf(key) % 2 === 0;
    };

    omitKeys(obj, fn).should.deepEqual({
      a: 2,
      c: 10
    });
  });
});
