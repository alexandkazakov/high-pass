const {src, dest} = require('gulp');
const webpConv = require('gulp-webp');
const changed = require('gulp-changed');
const plumber = require('gulp-plumber');

module.exports = function webp() {
	return src('build/img/**/*.+(png|jpg|jpeg)')
		.pipe(plumber())
		.pipe(changed('build/img', {
			extension: '.webp'
		}))
		.pipe(webpConv())
    .pipe(dest('./src/img/'))
    .pipe(dest('./dev/img/'))
    .pipe(dest('./build/img/'))
}
