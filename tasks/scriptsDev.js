const {src, dest} = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const notify = require('gulp-notify');
const rename = require("gulp-rename");
const map = require('gulp-sourcemaps');
const browserSync = require('browser-sync');

module.exports = function scripts() {
  return src([
      './src/js/components/**/*.js',
      './src/js/main.js',
    ], {"allowEmpty": true})
    .pipe(map.init())
    .pipe(babel({
        presets: ['@babel/env'],
    }))
    .pipe(concat('app.js'))
    .pipe(map.write())
    .pipe(dest('./dev/js/'))
    .pipe(uglify({
      toplevel: true,
    }).on('error', notify.onError()))
    .pipe(rename({suffix: '.min'}))
    .pipe(map.write())
    .pipe(dest('./dev/js/'))
    .pipe(browserSync.stream());
}
