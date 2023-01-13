const {src, dest} = require('gulp');

module.exports = function fonts() {
	return src([
    './src/fonts/**/*.woff2',
    './src/fonts/**/*.woff',
  ], {"allowEmpty": true})
    .pipe(dest('./dev/fonts/'))
    .pipe(dest('./build/fonts/'))
}
