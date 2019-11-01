module.exports = () => {
    $.gulp.task('webp', () => {
        return $.gulp.src('build/img/**/*.{jpg,png}')
            .pipe($.gp.webp({quality: 90}))
            .pipe($.gulp.dest('build/img'));
    });
};
