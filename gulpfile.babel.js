import gulp from 'gulp'
import del from 'del'
import gulpLoadPlugins from 'gulp-load-plugins'

const $ = gulpLoadPlugins()

const styles = {
  output: [
    './assets/scss/**/**/*.scss'
  ],
  input: [
    './assets/css'
  ]
}
const scripts = {
  input: [],
  output: []
}

// Remove all compiled styles and scripts
gulp.task('clean', cb => del([styles.output], { dot: true }))

// Bower
gulp.task('bower', () => {
  return $.bower()
})

gulp.task('styles', () => {
  gulp
    .src(styles.input)
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer())
    .pipe(gulp.dest(styles.output))
})

gulp.task('styles:watch', () => {
  gulp.watch(styles.input, ['styles'])
})

// Default task
gulp.task('default', ['clean'], cb => {
  runSequence('bower', cb);
})

gulp.task('dev', ['styles', 'styles:watch'])
