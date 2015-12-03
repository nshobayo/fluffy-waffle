// Include gulp & browserify
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');

// Include Our Plugins
var babelify = require('babelify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var less = require('gulp-less');
var path = require('path');


// Lint Task
gulp.task('lint', function() {
  return gulp.src('js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
  });

// LESS Compile
gulp.task('styles', function () {
  return gulp.src('less/all.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(rename('all.min.css'))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

// Copy IndexHtml
gulp.task('index', function() {
  return gulp.src('html/index.html')
  .pipe(gulp.dest('dist'));
  });

// Copy Server Scripts
gulp.task('serverjs', function() {
  return gulp.src('js/server/*.js')
  .pipe(gulp.dest('dist'));
  });

// Concatenate & Minify JS
gulp.task('scripts', function() {
      // set up the browserify instance on a task basis
      var b = browserify({
        entries: 'js/client/index.jsx',
        extensions: ['.jsx'],
        debug: true
        });

      return b.transform(babelify.configure({
        presets: ["es2015", "react"]
        })).bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('dist/js/client'))
      .pipe(rename('bundle.min.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest('dist/js/client'));
      });

// Copy Data Content
gulp.task('contents', function() {
  return gulp.src('data/*.json')
  .pipe(gulp.dest('dist/data'));
  });

gulp.task('lib_react', function() {
  return gulp.src(['node_modules/react/dist/**/*'])
  .pipe(gulp.dest('dist/lib/react'));
  });

gulp.task('lib_react_dom', function() {
  return gulp.src(['node_modules/react-dom/dist/**/*'])
  .pipe(gulp.dest('dist/lib/react-dom'));
  });

gulp.task('libraries', ['lib_react', 'lib_react_dom']);

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('js/client/**/*.js', ['lint', 'scripts']);
  gulp.watch('js/client/**/*.jsx', ['lint', 'scripts']);
  gulp.watch('js/server/*.jsx', ['serverjs']);
  gulp.watch('js/server/*.js', ['serverjs']);
  gulp.watch('data/*.json', ['contents']);
  gulp.watch('html/*.html', ['index']);
  gulp.watch('less/**/*.less', ['styles']);
  });

// Default Task
gulp.task('default', ['lint', 'scripts', 'serverjs', 'contents', 'index', 'styles', 'watch']);