var gulp = require('gulp');
var $ = require('gulp-load-plugins')(); //make plugins available in $.
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var browserSync = require("browser-sync"); //the running browserSync instance from gulpfile.js will be picked up and used here

//if self hosting any fonts
gulp.task('fonts', function(){
  return gulp.src('./src/fonts/**/*').pipe(gulp.dest('dist/assets/fonts'));
});

// optimizinng images:
// gulp.task('images', function() {
//   return gulp.src('./src/img/**/*')
//     .pipe(imagemin({
//       progressive: true,
//       use: [pngquant()]
//     }))
//     .pipe(gulp.dest('dist/assets/img'))
// });

gulp.task('styles', [], function(){

    var sassOptions = {
      // outputStyle: 'expanded',
      //make vendor stylesheet paths relatively importable from in scss
      includePaths: ['./bower_components/foundation/scss/']
    };

    var sourcemapsOptions = {
      debug: false, // turn on for more guidance if not working
      // sourceMappingURLPrefix: 'https://asset-host.example.com/assets'
      // sourceMappingURL: function(file) {
      //   return 'https://asset-host.example.com/' + file.relative + '.map';
      // }
    };

    return gulp.src('src/assets/scss/main.scss')
    .pipe($.sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe($.sourcemaps.write('./', sourcemapsOptions)) //write to same directory as generated css
    .pipe(gulp.dest('./dist/assets/css'))
    .pipe(browserSync.stream()); //inject the changed stylesheet rather than reloading the page

});
