import gulp from 'gulp'
import del from 'del'
import gulpLoadPlugins from 'gulp-load-plugins'
import runSequence from 'run-sequence';

const $ = gulpLoadPlugins()

const vendor = ['/assets/vendor']
const compiled = '/assets/css'
const styles = {
  input: [
    './assets/scss/**/**/*.scss'
  ],
  output: './assets/css'
}
const scripts = {
  input: [],
  output: []
}
const blogPath = '/Users/amila/Documents/Projects/blog/content/themes/walden'

// Remove all compiled styles and scripts
gulp.task('clean', cb => del([styles.output], { dot: true }))

// Bower
gulp.task('bower', () => {
  return $.bower()
})

// Styles
gulp.task('styles', () => {
  gulp
    .src(styles.input)
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer())
    .pipe($.if('*.css', $.cssnano()))
    .pipe($.size({ title: 'styles' }))
    .pipe(gulp.dest(styles.output))
})

// Watch styles
gulp.task('styles:watch', () => {
  gulp.watch(styles.input, ['styles'])
})

// Copy
gulp.task('copy', () => {
  return gulp.src(['**/**', '*'], { base: '.' })
    .pipe($.newer())
    .pipe(gulp.dest(blogPath))
})

// Dev
gulp.task('dev', ['styles', 'styles:watch'])

// Default
gulp.task('default', [], cb => {
  runSequence('clean', 'bower', 'styles');
})
