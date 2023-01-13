const {src, dest} = require('gulp');
const rename = require("gulp-rename");
const bulk = require('gulp-sass-bulk-importer');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const prefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const map = require('gulp-sourcemaps');
const browserSync = require('browser-sync');

module.exports = function stylesDev() {
  return src('./src/styles/**/*.scss')
    .pipe(map.init())
    .pipe(bulk())
    .pipe(sass())
    .pipe(prefixer({
      cascade: false,
      overrideBrowserslist: ['last 8 versions'],
			browsers: [
        'Android >= 4',
				'Chrome >= 20',
				'Firefox >= 24',
				'Explorer >= 11',
				'iOS >= 6',
				'Opera >= 12',
				'Safari >= 6',
			],
    }))
    .pipe(concat('main.css'))
    .pipe(map.write())
    .pipe(dest('./dev/styles/'))
    .pipe(cleanCSS({
      level: 2,
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(map.write())
    .pipe(dest('./dev/styles/'))
    .pipe(browserSync.stream())
};
