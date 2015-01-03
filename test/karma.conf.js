'use strict';

var istanbul = require('browserify-istanbul');


module.exports = function(config) {

  config.set({

    basePath: '../',
    frameworks: ['browserify', 'mocha'],
    browsers: ['PhantomJS'],
    plugins: [
      'karma-browserify',
      'karma-coverage',
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher'
    ],
    preprocessors: {
      'src/js/**/*.js': ['browserify'],
      'test/karma.adapter.js': ['browserify']
    },
    proxies: {
      '/': 'http://localhost:9876/'
    },
    urlRoot: '/__karma__/',
    logLevel: config.LOG_DEBUG,
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: 'test/coverage/',
      reporters: [
        // TODO: bug with split
        // https://github.com/karma-runner/karma-coverage/issues/123
        { type: 'lcov' },
        { type: 'text-summary', subdir: '.', file: 'text-summary.txt' }
      ]
    },
    browserify: {
      transform: [istanbul({
        ignore: [
          '**/src/js/templates.js',
          '**/src/js/**/*.spec.js'
        ]
      })],
      debug: false
    },
    files: [
      // src-specific code
      './src/js/main.js'
      // 3rd-party resources
      , './test/karma.adapter.js'
      // test-specific code
      , './src/**/*.spec.js'
    ]
  });

};
