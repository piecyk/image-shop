'use strict';

var gulp          = require('gulp');
var gutil         = require('gulp-util');
var shell         = require('gulp-shell');
var runSequence   = require('run-sequence');
var browserSync   = require('browser-sync');

// push to gh-pages after
gulp.task('deployToGhPages', shell.task([
  // 'git add -f build && git commit -m "prod build"',
  // 'git stash',
  // 'git subtree push --prefix build origin gh-pages',
  // 'git stash pop',
]));

// hack to exit browserSync and stop the gulp tasks
gulp.task('exitBrowserSync', function() {
  browserSync.exit();
});

gulp.task('deploy', function() {
  runSequence('prod', 'unit', 'protractor', 'deployToGhPages', 'exitBrowserSync');
});
