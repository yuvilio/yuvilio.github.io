var _                 = require('lodash');
var $ = require('gulp-load-plugins')(); //make plugins available in $.
var gulp              = require('gulp');
var gulpsmith         = require('gulpsmith');
var gulp_front_matter = require('gulp-front-matter');
var inPlace = require('metalsmith-in-place');
var layouts = require('metalsmith-layouts');

var metadata          = require('metalsmith-metadata');
var markdown          = require('metalsmith-markdown');
var permalinks        = require('metalsmith-permalinks');
var collections       = require('metalsmith-collections');
var drafts            = require('metalsmith-drafts');
var tags              = require('metalsmith-tags');
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

  return gulp.src(['./src/**/*.md', './src/data/**/*.yaml'])
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
      // .metadata({ }) //global meta data
      // .use(drafts())
      .use(metadata({ //various data
        site_global: 'site_global.yaml'
        // testJson: 'test.json'
      }))
      .use(collections({
        posts: {
          pattern: 'posts/*.md',
          sortBy: 'date',
          reverse: true
        }
      }))
      .use(tags({
        handle: 'tags', //frontmatter key
        path:'tag/:tag.html', //aggresgate pages
        layout: 'tag.nunj',
        sortBy: 'date',
        reverse: true,
        skipMetadata: false,
        // Any options you want to pass to the [slug](https://github.com/dodo/node-slug) package.
        // slug: {mode: 'rfc3986'}

      }))
      .use(markdown()) //translate any markdown not in raw to html
      .use(permalinks({
        pattern: 'posts/:title'
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
