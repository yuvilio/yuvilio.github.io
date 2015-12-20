var gulp       = require('gulp');
var $ = require('gulp-load-plugins')(); //make plugins available in $.
var browserSync = require("browser-sync");

// var browserify = require('browserify');
// var source     = require('vinyl-source-stream');

//vendor libraries
gulp.task('scripts', function() {

    return gulp.src( [
      'bower_components/jquery/dist/jquery.js',

      /* zurb foundation */
      './bower_components/foundation-sites/dist/foundation.js',
      // './bower_components/foundation-sites/js/foundation.core.js',
      // './bower_components/foundation-sites/js/foundation.tabs.js',

      /* modernizr . generated from a modernizr-config.json fils (see assets/js) and placed in */
      './bower_components/modernizr/modernizr.js',

      /* highlight.js. generated from the repository: node tools/build.js -n -t browser bash css diff ... */
      './bower_components/highlight.js/highlight.pack.js',

      'src/assets/js/main.js'
      ]
     )
     .pipe($.concat('all.js'))
        // .pipe($.uglify())
        // .pipe($.if(isProduction, $.stripDebug()))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(browserSync.stream());
});

// var src  = './src/assets/js/';

//separate stack if s portion (small libraries grouped together):
// gulp.task('browserify', ['libs'], function() {
//   return browserify(src + 'main.js')
//     // .transform() //transforms here
//     .bundle()
//     .pipe(source('main.js'))
//     .pipe(gulp.dest(dest));
// });
