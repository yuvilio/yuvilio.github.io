var gulp       = require('gulp');
var ghPages = require('gulp-gh-pages');

// Deploy to gh pages
gulp.task('deploy',  function() {
  //fetch generated results
  return gulp.src('./dist/**/*')
    .pipe(ghPages(
      {
        branch: 'gh-pages'
      //   push: true,
      //   force: true,
      //   remoteUrl: 'git@github.com:yuvilio/yuvilio.github.io.git'
      }

    ));
});
