/*global require*/
(function (r) {
	'use strict';
	const gulp = r('gulp'),
		watch = r('gulp-watch'),
		html_include = r('gulp-file-include'),
		scss = r('gulp-sass');


	gulp.task('html_include', () => {
		gulp.src(['developer/html/index.html'])
			.pipe(html_include({
				prefix: '@!',
				basepath: '@file'
			}))
			.pipe(gulp.dest('developer'));
	});
	gulp.task('scss', () => {
		gulp.src('developer/scss/all.scss').pipe(scss()).pipe(gulp.dest('developer/css'));
	});
	gulp.task('watch', () => {
		watch('developer/scss/**/*.scss');
		watch('developer/html/**/*.html');
		gulp.watch('developer/scss/**/*.scss', ['scss']);
		gulp.watch('developer/html/**/*.html', ['html_include']);
	});

	gulp.task('default', ['scss', 'watch', 'html_include']);
})(require);