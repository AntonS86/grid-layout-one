module.exports = () => {
    $.gulp.task('build', $.gulp.series('clean', 'copy', 'sass', 'scripts', 'images', 'webp', 'svg'));
};
