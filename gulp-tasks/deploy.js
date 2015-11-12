var gulp       = require('gulp');
var ghPages = require('gulp-gh-pages');

// Deploy to gh pages . make sure to run gulp --env prdocution before running this
gulp.task('deploy',  function() {
  //fetch generated results
  return gulp.src('./dist/**/*')
    .pipe(ghPages(
      {
        branch: 'master'  //since this is username.github.io (organization), github
        //expects the generated files in the master branch
      //   push: true,
      //   force: true,
      //   remoteUrl: 'git@github.com:yuvilio/yuvilio.github.io.git'
      }

    ));
});
