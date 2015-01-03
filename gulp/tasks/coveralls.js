'use strict';

var coveralls = require('gulp-coveralls');
var gulp      = require('gulp');
var config    = require('../config');

gulp.task('coveralls', function() {
  gulp.src(config.test.coverage)
    .pipe(coveralls());
});
