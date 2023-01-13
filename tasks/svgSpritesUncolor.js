const {src, dest} = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const cheerio = require('gulp-cheerio');

module.exports = function svgSpritesUncolor() {
  return src('./src/img/svg/uncolor/**/*.svg')
      .pipe(cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: {xmlMode: true}
      }))
      .pipe(svgSprite({
        mode: {
          stack: {
            sprite: '../spriteUncolor.svg',
          },
        },
      }))
      .pipe(dest('./build/img/'))
      .pipe(dest('./dev/img/'))
};
