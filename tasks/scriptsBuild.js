const {src, dest} = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const notify = require('gulp-notify');
const browserSync = require('browser-sync');

module.exports = function scripts() {
  return src([
      './src/js/components/**/*.js',
      './src/js/script.js',
    ], {"allowEmpty": true})
    .pipe(babel({
        presets: ['@babel/env'],
    }))
    .pipe(concat('app.min.js'))
    .pipe(uglify({
      toplevel: true,
    }).on('error', notify.onError()))
    .pipe(dest('./build/js/'))
    .pipe(browserSync.stream());
}
