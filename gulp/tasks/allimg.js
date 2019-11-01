module.exports = () => {
    $.gulp.task('allimg', () => {
        return $.gulp.src('img/**/*.{jpg,png,svg}')
            .pipe($.gulp.dest('build/img'));
    });
};
