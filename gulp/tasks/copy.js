module.exports = () => {
    $.gulp.task('copy', () => {
        return $.gulp.src([
            'fonts/**/*.{woff,woff2}',
            'img/**',
            '*.html',
        ], {
            base: '.',
        })
            .pipe($.gulp.dest('build'));

    });
};
