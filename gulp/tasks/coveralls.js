'use strict';

var coveralls = require('gulp-coveralls');
var gulp      = require('gulp');
var config    = require('../config');
var gulpif    = require('gulp-if');

gulp.task('coveralls', function() {
  gulp.src(config.test.coverage + '/**/lcov.info')
    .pipe(gulpif(process.env.TRAVIS, coveralls()));
});
