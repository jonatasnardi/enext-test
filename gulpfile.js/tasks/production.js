var gulp = require('gulp');
var runSequence = require('run-sequence');

var productionTask = function productionTask(cb) {
    global.PRODUCTION = true;
	runSequence('clean', ['fonts', 'images', 'icons', 'data'], ['scripts', 'styles', 'html'], cb);
};

gulp.task('production', productionTask);
