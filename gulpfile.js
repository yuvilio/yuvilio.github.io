//gulpfile inspiration from dfmonaco, everydayhero, grancalavera

var gulp = require("gulp");
var browserSync = require("browser-sync").create();


//tasks
require('./gulp-tasks/templates.js');
require('./gulp-tasks/styles.js');
require('./gulp-tasks/scripts.js');
require('./gulp-tasks/deploy.js');

//tasks of tasks

gulp.task('default', ['build', 'server', 'watch']);
gulp.task('build', ['templates', 'styles', 'scripts' ]);

gulp.task('server', function () {
  return browserSync.init(['dist/**/*'], {
    server: {
      baseDir: './dist',
      'proxy': 'yuvilio.github.dev'
    },
    open: false
  });
});

gulp.task('watch', function(){
  gulp.watch(['./src/**/*.md', '_layouts/**/*.nunj'], ['templates', browserSync.reload]);
  gulp.watch('./src/assets/scss/**/*.scss', ['styles']);
  gulp.watch('./src/assets/js/**/*.js', ['scripts', browserSync.reload]);
});
