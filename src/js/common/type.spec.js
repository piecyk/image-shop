'use strict';

var type = require('./type.js');

describe('common:Type', function () {

  it('should check exists', function (){
    expect(type).to.exist();
  });

  it('should check type object', function (){
    expect(type.check({}, 'object')).to.eq(true);
  });

  it('should check type array', function (){
    expect(type.check([], 'array')).to.eq(true);
  });

  it('should check type string', function (){
    expect(type.check('', 'string')).to.eq(true);
  });

  it('should check type number', function (){
    expect(type.check(1, 'number')).to.eq(true);
  });

  it('should check type number', function (){
    expect(type.check(1.4, 'number')).to.eq(true);
  });

  it('should check type undefined', function (){
    expect(type.check(undefined, 'undefined')).to.eq(true);
  });

  it('should check type null', function (){
    expect(type.check(null, 'null')).to.eq(true);
  });

  it('should check number and expected string', function (){
    expect(function(){type.set(1, 'string');}).to.throw('Type is: number but expected type is: string');
  });

  it('should check array and expected object', function (){
    expect(function(){type.set([], 'object');}).to.throw('Type is: array but expected type is: object');
  });

  it('should check type number and return number', function (){
    expect(type.set(1, 'number')).to.eq(1);
  });

  it('should check type undefined and return undefined', function (){
    expect(type.set(undefined, 'undefined')).to.eq(undefined);
  });

  it('should dont check type if optional to true and val is undefined', function (){
    expect(type.set(undefined, 'string', true)).to.eq(undefined);
  });

  it('should throw exception if check val is undefined', function (){
    expect(function(){type.set(undefined, 'object');}).to.throw('Type is: undefined but expected type is: object');
  });

  it('should throw exception if check val is undefined', function (){
    expect(function(){type.set(1, 'string', true);}).to.throw('Type is: number but expected type is: string');
  });

  it('should check type of {} is object', function (){
    expect(type.of({}).is('object')).to.eq(true);
  });

  it('should accept undefined when checking type for optional object', function (){
    expect(type.of(undefined).isUndefinedOr('object')).to.eq(true);
  });

  it('should accept {} when checking type for optional object', function (){
    expect(type.of({}).isUndefinedOr('object')).to.eq(true);
  });

  it('should not accept [] when checking type for optional object', function (){
    expect(type.of([]).isUndefinedOr('object')).to.eq(false);
  });

});
