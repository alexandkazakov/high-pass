const {src, dest} = require('gulp');
const svgSprite = require('gulp-svg-sprite');

module.exports = function svgSprites() {
  return src('./src/img/svg/color/**/*.svg')
      .pipe(svgSprite({
        mode: {
          stack: {
            sprite: '../sprite.svg',
          },
        },
      }))
      .pipe(dest('./build/img/'))
      .pipe(dest('./dev/img/'))
};


// const {src, dest} = require('gulp');
// const svgSprite = require('gulp-svg-sprite');
// const cheerio = require('gulp-cheerio');

// module.exports = function svgSprites() {
//   return src('./src/img/svg/color/**/*.svg')
//       .pipe(cheerio({
//         run: function ($) {
//           $('[fill]').removeAttr('fill');
//           $('[stroke]').removeAttr('stroke');
//           $('[style]').removeAttr('style');
//         },
//         parserOptions: {xmlMode: true}
//       }))
//       .pipe(svgSprite({
//         mode: {
//           stack: {
//             sprite: '../sprite.svg',
//           },
//         },
//       }))
//       .pipe(dest('./build/img/'))
//       .pipe(dest('./dev/img/'))
// };
