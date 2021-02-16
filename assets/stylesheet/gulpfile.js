var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssdeclsort = require('css-declaration-sorter');

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(postcss([cssdeclsort({order:"smacss"})]))
    .pipe(postcss([autoprefixer({
      browsers: ["last 2 versions", "ie >= 11", "Android >= 4"],
      cascade: false
    })]))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./sass/**/*.scss', gulp.task('sass'));
});