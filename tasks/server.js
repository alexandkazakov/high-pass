const browserSync = require('browser-sync');

module.exports = function server() {
  browserSync.init({
    server: {
        baseDir: 'dev',
    },
  });
}
