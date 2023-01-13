const del = require('del');

module.exports = function removeDir() {
	return del(['build', 'dev']);
};