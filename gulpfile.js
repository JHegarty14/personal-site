/*====================> GULPFILE <====================//
This file automates the build process. Run 'gulp' or
  'npm start' to compile your buid and preview.

TASKS
======
- Browser sync => BUGGY.
  - Reloads the browser with every save.
- Nodemon
  - Reloads the server with backend changes
- Sass / Sass Compile
  - Minify all SASS files into assets/app.css
    - ONLY runs with CHANGES.


//=====================================================*/
const gulp = require('gulp');
      sass = require('gulp-sass');
      nodemon = require('gulp-nodemon');
      cleanCSS = require('gulp-clean-css');
      autoprefixer = require('gulp-autoprefixer');


// BROWSERSYNC: reloads browser with every file change (no manual refresh)

// Very useful for server-side rendering, not so sure it works well w/ React.
// const browserSync = require('browser-sync');
// const reload = browserSync.reload;

// gulp.task('browser-sync', ['nodemon'], function() {
//   browserSync({
//     proxy: "localhost:3000",  // local node app address
//     port: 5000,     // use *different* port than above
//     notify: true
//   });
// });

gulp.task('nodemon', ['sass'], function (cb) {
  var called = false;
  return nodemon({
    script: '_app.js',
    ignore: [
      'gulpfile.js',
      'node_modules/'
    ]
  })
  .on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  })
});

// Basic sass task -> Watch files for changes, passes along to 'sasscompile'
gulp.task('sass', function(){
  gulp.watch('./sass/**/*.scss', ['sasscompile']);
});

// Downcompile SCSS -> CSS and Autoprefix for x-browser support
gulp.task('sasscompile', function(){
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false}))
    .pipe(gulp.dest('./client/public'));
});

// This version skips browser-sync and goes straight to nodemon
gulp.task('default', ['nodemon'], function () {
  gulp.watch(['sass/*.scss']);
});

// If we want browser-sync 
// gulp.task('default', ['browser-sync'], function () {
  // gulp.watch(['sass/*.scss'], reload);
// });