'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var gutil        = require('gulp-util');
var source       = require('vinyl-source-stream');
var streamify    = require('gulp-streamify');
var watchify     = require('watchify');
var browserify   = require('browserify');
var uglify       = require('gulp-uglify');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');
var ngAnnotate   = require('browserify-ngannotate');
var to5ify       = require("6to5ify");

// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file) {

  var bundler = browserify({
    entries: config.browserify.entries,
    cache: {},
    packageCache: {},
    fullPaths: true
    //, debug : !global.isProd
  })
  .transform(to5ify);

  if ( !global.isProd ) {
    bundler = watchify(bundler);
    bundler.on('update', function() {
      rebundle();
    });
  }

  bundler.transform(ngAnnotate);

  function rebundle() {
    var stream = bundler.bundle();

    gutil.log('Rebundle...');

    return stream.on('error', handleErrors)
      .pipe(source(file))
      .pipe(gulpif(global.isProd, streamify(uglify())))
      .pipe(gulp.dest(config.scripts.dest))
      .pipe(browserSync.reload({ stream: true, once: true }))
    ;
  }

  return rebundle();

}

gulp.task('browserify', function() {
  return buildScript('main.js');
});

// TODO:
// https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md
// var sourcemaps = require('gulp-sourcemaps');
// var buffer = require('vinyl-buffer');

// gulp.task('bWatch', function() {
  
//   var bundler = watchify(browserify('./app/js/main.js', {
//     entries: config.browserify.entries,
//     cache: {},
//     packageCache: {},
//     fullPaths: true
//   }));
//   // add any other browserify options or transforms here
  
//   bundler.transform(ngAnnotate);

//   gulp.task('js', bundle); // so you can run `gulp js` to build the file
//   bundler.on('update', bundle); // on any dep update, runs the bundler

//   function bundle() {
//     return bundler.bundle()
//     // log errors if they happen
//       .on('error', gutil.log.bind(gutil, 'Browserify Error'))
//       .pipe(source('bundle.js'))
//     // optional, remove if you dont want sourcemaps
//       .pipe(buffer())
//       .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
//       .pipe(sourcemaps.write('./')) // writes .map file
//     //
//       .pipe(gulp.dest('./build'));
//   }

//   return bundle();
// });

