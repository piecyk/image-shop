'use strict';

module.exports = function(config) {

  config.set({

    basePath: '../',
    frameworks: ['browserify', 'mocha', 'chai', 'sinon'],
    browsers: ['PhantomJS'],
    plugins: [
      'karma-browserify',
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
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    reporters: ['progress'],
    files: [
      // src-specific code
      'src/js/main.js',

      // 3rd-party resources
      'node_modules/angular-mocks/angular-mocks.js',
      
      // test files
      //'test/unit/**/*.js',
      'src/**/*.spec.js'
    ]
  });

};
