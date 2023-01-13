// command to terminal:
// npm init
// (sudo npm i -g gulp gulp-cli)
// sudo npm i gulp-cheerio
// npm i -D gulp gulp-cli
// npm install --save-dev require-dir del@6.1.1 sass gulp-sass gulp-sass-bulk-importer gulp-rename gulp-concat gulp-autoprefixer gulp-clean-css gulp-sourcemaps browser-sync gulp-htmlmin gulp-svg-sprite gulp-babel gulp-uglify-es gulp-notify @babel/core @babel/preset-env gulp-changed gulp-imagemin@7.1.0 imagemin-jpeg-recompress imagemin-pngquant gulp-webp gulp-plumber

const {watch, series} = require('gulp');

const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

watch('./src/**/*.html', tasks.htmlMinify);
watch('./src/styles/**/*.scss', tasks.stylesDev, tasks.stylesBuild);
watch('./src/images/svg/**/*.svg', tasks.svgSprites);
watch('./src/fonts/**/*.woff2', tasks.fonts);
watch('./src/fonts/**/*.woff', tasks.fonts);
watch('./src/js/**/*.js', tasks.scriptsDev, tasks.scriptsBuild);
watch('./src/resources/**', tasks.resources);

exports.removeDir = tasks.removeDir;
exports.styles = tasks.stylesDev, tasks.stylesBuild;
exports.htmlMinify = tasks.htmlMinify;
exports.scripts = tasks.scriptsDev, tasks.scriptsBuild;

exports.default = series(
  tasks.removeDir, tasks.resources, tasks.htmlMinify, tasks.scriptsDev, tasks.scriptsBuild,
  tasks.stylesDev, tasks.stylesBuild, tasks.rasters, tasks.webp, tasks.svgSprites, tasks.svgSpritesUncolor, tasks.fonts, tasks.server
);
