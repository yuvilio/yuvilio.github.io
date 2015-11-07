var _                 = require('lodash');
var $ = require('gulp-load-plugins')(); //make plugins available in $.
var gulp              = require('gulp');
var gulpsmith         = require('gulpsmith');
var gulp_front_matter = require('gulp-front-matter');
var inPlace = require('metalsmith-in-place');
var layouts = require('metalsmith-layouts');

var markdown          = require('metalsmith-markdown');
var permalinks        = require('metalsmith-permalinks');
var collections       = require('metalsmith-collections');
var drafts            = require('metalsmith-drafts');
var nunjucks = require('nunjucks');

//configure templating engine you'll use with defaults
//and filters
nunjucks
  .configure(
    './_layouts',
    {
    watch: false,
    autoescape: false, //prevent metalsmith-markdown results being escaped
    noCache: true
  })
  .addFilter('somefilter', function(str) {
    return str;
  });

//generate html from markup
gulp.task('templates', function() {

  return gulp.src('./src/**/*.md')
    .pipe(gulp_front_matter({
      property: 'frontMatter',
      remove: true
    }))
    .on("data", function(file) {
      _.assign(file, file.frontMatter);
      delete file.frontMatter;
    })
    .pipe(
      gulpsmith()
      .metadata({
        site_name: "yuvilio.github.io"
      }) //global meta data
      .use(drafts())
      .use(collections({
        posts: {
          pattern: 'posts/*.md',
          sortBy: 'date',
          reverse: true
        }
      }))
      .use(markdown()) //translate any markdown not in raw to html
      .use(permalinks({
        pattern: ':title'
      }))
      .use(inPlace({ //apply nunjucks for variable interpolation
        engine: 'nunjucks',
        directory: './_layouts'
      }))
      .use(layouts({ //apply nunjucks directives (extends, include, ...)
        engine: 'nunjucks',
        directory: './_layouts'
      }))
    )
    .pipe(gulp.dest('./dist'))
});