'use strict';

var Type = function() {

  var self = this;

  function checkType(obj, expectedType, optional) {
    var type = self.getType(obj);
    return {
      type: type,
      valid: ((optional || false) && type === 'undefined') ? true : expectedType === type
    };
  }

  self.getType = function(obj) {
    var type = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
    if ('domwindow' === type) {
      if ('undefined' === typeof obj) { type = 'undefined'; }
      if ('object' === typeof obj) { type = 'null'; }
    }
    return type;
  };

  self.set = function(obj, expectedType, optional) {
    var typeObj = checkType(obj, expectedType, optional);
    if (typeObj.valid) {
      return obj;
    } else {
      throw new TypeError('Type is: ' + typeObj.type + ' but expected type is: ' + expectedType);
    }
  };

  self.check = function(obj, expectedType, optional) {
    return checkType(obj, expectedType, optional).valid;
  };

  /**
   * @description
   * Functional way of using type checks
   * type.of({}).is("object"))
   *
   * @param obj object
   * @returns { this }
   */
  self.of = function(obj) {
    self.obj = obj;
    return this;
  };

  self.is = function(expectedType) {
    return checkType(self.obj, expectedType, false).valid;
  };

  self.isUndefinedOr = function(expectedType) {
    return checkType(self.obj, expectedType, true).valid;
  };

  return self;
};

module.exports = new Type();
