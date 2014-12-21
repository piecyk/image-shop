'use strict';

module.exports = {

  'serverport': 3000,

  'styles': {
    'src' : 'src/styles/**/*.scss',
    'dest': 'build/css'
  },

  'scripts': {
    'src' : 'src/js/**/*.js',
    'dest': 'build/js'
  },

  'images': {
    'src' : 'src/images/**/*',
    'dest': 'build/images'
  },

  'views': {
    'watch': [
      'src/index.html',
      'src/**/*.tpl.html'
    ],
    'src': 'src/**/*.tpl.html',
    'dest': 'src/js'
  },

  'dist': {
    'root'  : 'build'
  },

  'browserify': {
    'entries'   : ['./src/js/main.js'],
    'bundleName': 'main.js'
  },

  'test': {
    'karma': 'test/karma.conf.js',
    'protractor': 'test/protractor.conf.js',
    'watch': 'src/**/*.spec.js'
  }

};
