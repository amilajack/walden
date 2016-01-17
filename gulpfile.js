'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

var input = './assets/scss/**/**/*.scss',
    output = './assets/css';

gulp.task('sass', function () {
  gulp
    .src(input)
    .pipe(sass().on('error', sass.logError))
    // .pipe(autoprefixer())
    .pipe(gulp.dest(output));
});

gulp.task('sass:watch', function () {
  gulp.watch(input, ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);
