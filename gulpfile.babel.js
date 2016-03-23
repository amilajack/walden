import gulp from 'gulp'
import del from 'del'
import babel from 'gulp-babel'

const scripts = [
  //
];
const distPath = './dist'

// Remove all compiled scripts
gulp.task('clean', cb => del(['./dist'], { dot: true }))

// Watch scripts
gulp.task('watch', () => {
  gulp.watch(scripts, ['default']);
})

// Default task
gulp.task('default', ['clean'], () => {

  gulp
    .src(scripts)
    .pipe(babel())
    .pipe(gulp.dest(distPath));
})

//
//
// var gulp = require('gulp'),
//     sass = require('gulp-sass'),
//     autoprefixer = require('gulp-autoprefixer');
//
// var input = './assets/scss/**/**/*.scss',
//     output = './assets/css';
//
// gulp.task('sass', function () {
//   gulp
//     .src(input)
//     .pipe(sass().on('error', sass.logError))
//     // .pipe(autoprefixer())
//     .pipe(gulp.dest(output));
// });
//
// gulp.task('sass:watch', function () {
//   gulp.watch(input, ['sass']);
// });
//
// gulp.task('default', ['sass', 'sass:watch']);
