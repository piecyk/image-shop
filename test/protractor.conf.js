'use strict';

exports.config = {

  baseUrl: 'http://127.0.0.1:3000/',
  capabilities: {
    browserName: process.env.TRAVIS ? 'firefox' : 'chrome',
    version: '',
    platform: 'ANY'
  },
  framework: 'mocha',
  mochaOpts:{
    reporter: 'spec',
    timeout: 4000,
    slow: 3000,
    enableTimeouts: false
  },
  specs: [
    'e2e/**/*.js'
  ]

};
