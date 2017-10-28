'use strict';

var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass         = require('gulp-sass');
var babelify     = require("babelify");
var browserify   = require('browserify');
var browserSync  = require('browser-sync');
var buffer       = require('vinyl-buffer');
var source       = require("vinyl-source-stream");
var sourcemaps   = require('gulp-sourcemaps');
var watchify     = require("watchify");
var gutil        = require("gulp-util");
var notify       = require('gulp-notify');
var plumber      = require('gulp-plumber');
var filter       = require('gulp-filter');
var foreach      = require('gulp-foreach');
var prettyError  = require('gulp-prettyerror');
var plugins      = require('gulp-load-plugins');

/**
 * Task: BABEL
 *
 * @description Babel has support for the latest version of JavaScript through syntax transformers. These plugins allow you to use new syntax, right now without waiting for browser support
 * @see https://babeljs.io/docs/setup/#installation
 */
 gulp.task("babel", function () {
     var b = browserify({ entries: ["src/app.js"] }).transform(babelify);
     function bundle() {
         b.bundle()
            .on('error', function (error) {
                 var args = Array.prototype.slice.call(arguments);

                 plugins().notify.onError({
                     'title': 'Babel Error',
                     'message': '<%= error.message %>'
                 }).apply(this, args);

                 console.error(error);

                 this.emit('end');
             })
            .pipe(source("app.js"))
            .pipe(buffer())
            .pipe(plugins().sourcemaps.init({'loadMaps': true}))
            .pipe(plugins().sourcemaps.write('.'))
            .pipe(gulp.dest('docs/assets/js'))
            .pipe(browserSync.stream());
     }
     bundle();
 });

 /**
  * Task: SASS
  */
gulp.task('sass', function() {
    return gulp.src("src/app.scss")
        .pipe(prettyError())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({browsers: '> 5%'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('docs/assets/css'))
        .pipe(filter('**/**.css'))
        .pipe(browserSync.stream())
});

/**
 * Task: public
 */
gulp.task('public', function() {
    gulp.src(['src/public/**/**'])
        .pipe(gulp.dest('docs'));
});

/**
 * Task: Build
 */
gulp.task('build', ['babel', 'sass']);

/**
 * Task: Serve
 */
gulp.task('serve', ['build'], function() {
    browserSync.init({
        server: {
            baseDir: 'docs'
        }
    });
    gulp.watch('src/public/**/**', ['public']).on('change', browserSync.reload);
    gulp.watch('src/**/**.scss', ['sass']);
    gulp.watch('src/**/**.js', ['babel']);
    gulp.watch('gulpfile.js', ['build']);
});

/**
 * Task: Default
 */
gulp.task('default', ['public', 'serve']);
