module.exports = () => {
    $.gulp.task('svg', () => {
        return $.gulp.src('img/**/*.svg')
            .pipe($.gp.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
           /* .pipe($.gp.cheerio({
                run: ($) => {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                },
                parserOptions: {xmlMode: true}
            }))*/
            .pipe($.gp.replace('&gt;', '>'))
            //build svg sprite
            .pipe($.gp.svgSprite({
                mode: {
                    symbol: {
                        sprite: 'sprite.svg'
                    }
                }
            }))
            .pipe($.gulp.dest('build/img'));
    });
};
