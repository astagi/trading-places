const { parallel, src, dest } = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');


function javascript(cb) {
  return src('js/**/*.js')
    .pipe(uglify())
    .pipe(dest('dist'))
}

function css(cb) {
  return src('./scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'})) // Using gulp-sass
    .pipe(dest('dist'))
}

exports.build = parallel(javascript, css);
