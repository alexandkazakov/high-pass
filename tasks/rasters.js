const {src, dest} = require('gulp');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const recompress = require('imagemin-jpeg-recompress');
const pngquant = require('imagemin-pngquant');
const browserSync = require('browser-sync');

module.exports = function rasters() {
	return src('./src/img/**/*.+(png|jpg|jpeg|gif|svg|ico)')
		.pipe(changed('./dev/img'))
		.pipe(changed('./build/img'))
		.pipe(imagemin({
				interlaced: true,
				progressive: true,
				optimizationLevel: 5,
			},
			[
				recompress({
					loops: 6,
					min: 50,
					max: 90,
					quality: 'high',
					use: [pngquant({
						quality: [0.8, 1],
						strip: true,
						speed: 1
					})],
				}),
				imagemin.gifsicle(),
				imagemin.optipng(),
				imagemin.svgo()
			], ), )
		.pipe(dest('./dev/img'))
		.pipe(dest('./build/img'))
  	.pipe(browserSync.stream())
}
