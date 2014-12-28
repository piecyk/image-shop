'use strict';

var istanbul = require('browserify-istanbul');


module.exports = function(config) {

  config.set({

    basePath: '../',
    frameworks: ['browserify', 'mocha', 'chai', 'sinon'],
    browsers: ['PhantomJS'],
    plugins: [
      'karma-browserify',
      'karma-coverage',
      'karma-mocha',
      'karma-chai',
      'karma-sinon',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher'
    ],
    preprocessors: {
      'src/js/**/*.js': ['browserify']
    },
    proxies: {
      '/': 'http://localhost:9876/'
    },
    urlRoot: '/__karma__/',
    logLevel: config.LOG_DEBUG,
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      reporters: [
        // TODO: bug with split
        // https://github.com/karma-runner/karma-coverage/issues/123
        {
          type: 'lcov',
          dir: 'test/coverage/'
        },
        {
          type: 'text-summary',
          dir: 'test/coverage/'
        }
      ]
    },
    browserify: {
      transform: [istanbul({
        ignore: [
          '**/src/js/templates.js',
          '**/src/js/**/*.spec.js'
        ]
      })]
    },
    files: [
      // src-specific code
      './src/js/main.js'

      // 3rd-party resources
      , './node_modules/angular-mocks/angular-mocks.js'
      // TODO: chai-as-promised.js
      //, 'node_modules/chai-as-promised/lib/chai-as-promised.js',

      // test files
      , './src/**/*.spec.js'
    ]
  });

};
