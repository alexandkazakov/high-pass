const {src, dest} = require('gulp');
const htmlMin = require('gulp-htmlmin');
const browserSync = require('browser-sync');

module.exports = function htmlMinify() {
  return src('./src/**/*.html')
    .pipe(dest('./dev/'))
    .pipe(htmlMin({
        collapseWhitespace: true,
    }))
    .pipe(dest('./build/'))
    .pipe(browserSync.stream())
}
