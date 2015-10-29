var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var appFiles = ['index.js', 'lib/**/*.js', 'bin/**/*.js' ];
var testFiles = ['test/**/*.js'];

gulp.task('watch', function() {
  gulp.watch(['lib/**', 'test/**', 'gulpfile.js'], ['default']);
});

gulp.task('jshint:test', function() {
  return gulp.src(testFiles)
    .pipe(jshint.reporter('default'));
});

gulp.task('jshint:greet', function() {
  return gulp.src(testFiles)
    .pipe(jshint.reporter('default'));
});

// To implement mocha test
gulp.task('mocha:test', function() {
  return gulp.src('./test/*.js', {read: false})

    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('mocha', ['mocha:test']);
gulp.task('jshint', ['jshint:test', 'jshint:greet']);
gulp.task('default', ['jshint', 'mocha']);
