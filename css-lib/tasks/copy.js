'use strict';

/*
  * copy.js
  * -------------
  * Task to copy assets to dist folder
*/

const gulp = require(`gulp`);

gulp.task(`copy`, function() {
  return gulp.src([`./src/*.html`], {
    base: './src'
  }).pipe(gulp.dest(`./dist/`));
});
