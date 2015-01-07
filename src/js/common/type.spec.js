'use strict';

var Type = require('./type');

describe('common:Type', function () {

  it('should check exists', function (){
    expect(Type).to.exist();
  });

  it('should check Type object', function (){
    expect(Type.check({}, 'object')).to.eq(true);
  });

  it('should check Type array', function (){
    expect(Type.check([], 'array')).to.eq(true);
  });

  it('should check Type string', function (){
    expect(Type.check('', 'string')).to.eq(true);
  });

  it('should check Type number', function (){
    expect(Type.check(1, 'number')).to.eq(true);
  });

  it('should check Type number', function (){
    expect(Type.check(1.4, 'number')).to.eq(true);
  });

  it('should check Type undefined', function (){
    expect(Type.check(undefined, 'undefined')).to.eq(true);
  });

  it('should check Type null', function (){
    expect(Type.check(null, 'null')).to.eq(true);
  });

  it('should check number and expected string', function (){
    expect(function(){Type.set(1, 'string');}).to.throw('Type is: number but expected type is: string');
  });

  it('should check array and expected object', function (){
    expect(function(){Type.set([], 'object');}).to.throw('Type is: array but expected type is: object');
  });

  it('should check Type number and return number', function (){
    expect(Type.set(1, 'number')).to.eq(1);
  });

  it('should check Type undefined and return undefined', function (){
    expect(Type.set(undefined, 'undefined')).to.eq(undefined);
  });

  it('should dont check Type if optional to true and val is undefined', function (){
    expect(Type.set(undefined, 'string', true)).to.eq(undefined);
  });

  it('should throw exception if check val is undefined', function (){
    expect(function(){Type.set(undefined, 'object');}).to.throw('Type is: undefined but expected type is: object');
  });

  it('should throw exception if check val is undefined', function (){
    expect(function(){Type.set(1, 'string', true);}).to.throw('Type is: number but expected type is: string');
  });

  it('should check Type of {} is object', function (){
    expect(Type.of({}).is('object')).to.eq(true);
  });

  it('should accept undefined when checking Type for optional object', function (){
    expect(Type.of(undefined).isUndefinedOr('object')).to.eq(true);
  });

  it('should accept {} when checking Type for optional object', function (){
    expect(Type.of({}).isUndefinedOr('object')).to.eq(true);
  });

  it('should not accept [] when checking Type for optional object', function (){
    expect(Type.of([]).isUndefinedOr('object')).to.eq(false);
  });

  it('should check getType of undefined', function (){
    expect(Type.getType(undefined)).to.eq('undefined');
  });

  it('should check getType of object', function (){
    expect(Type.getType({})).to.eq('object');
  });

  it('should check getType of number', function (){
    expect(Type.getType(1)).to.eq('number');
  });

  it('should check getType of null', function (){
    expect(Type.getType(null)).to.eq('null');
  });

});
