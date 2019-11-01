global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  browserSync: require('browser-sync').create(),
  del: require('del'),
  imageminJpegRecompress: require('imagemin-jpeg-recompress'),
  imageminPngquant: require('imagemin-pngquant'),
  path: {
    config: require('./gulp/config'),
    jquery: './js/jquery.js',
    js: './js/**/*.js',
  }
};

$.path.config.forEach((path) => {
  require(path)();
});
