'use strict';

require('angular-mocks');
var chai      = require('chai');
var sinon     = require('sinon');
var sinonChai = require('sinon-chai');
//TODO: re-factor name helpers
var helpers   = require('./helpers');

chai.use(sinonChai);

//TODO: don't work with phantomjs ;/
// var chaiAsPromised = require('chai-as-promised');
// chai.use(chaiAsPromised);

beforeEach(function() {
  // Create a new sandbox before each test
  this.sinon = sinon.sandbox.create();
});

afterEach(function() {
  // Cleanup the sandbox to remove all the stubs
  this.sinon.restore();
});

module.exports = {
  expect: chai.expect,
  sinon: sinon
};

window.expect = chai.expect;
window.sinon = sinon;
window.helpers = helpers;
