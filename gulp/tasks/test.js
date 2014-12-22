'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('test', ['server'], function() {

  runSequence('views', 'unit', 'protractor', 'exitBrowserSync');

});
