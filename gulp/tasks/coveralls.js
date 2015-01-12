'use strict';

var coveralls = require('gulp-coveralls');
var gulp      = require('gulp');
var config    = require('../config');
var gutil     = require('gulp-util');

gulp.task('coveralls', function() {
  if (process.env.TRAVIS) {
    gutil.log('coveralls...');
    
    gulp.src(config.test.coverage + '/**/lcov.info')
      .pipe(coveralls());
  }
});
