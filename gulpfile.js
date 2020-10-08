const { parallel, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

const jsFiles = 'js/**/*.js'
const scssFiles = './scss/**/*.scss'

function javascript(cb) {
  return src(jsFiles)
    .pipe(uglify())
    .pipe(dest('dist'))
}

function css(cb) {
  return src(scssFiles)
    .pipe(sass({outputStyle: 'compressed'})) // Using gulp-sass
    .pipe(dest('dist'))
}

exports.build = parallel(javascript, css);
exports.watch = function () {
  watch(jsFiles, javascript);
  watch(scssFiles, css);
};
