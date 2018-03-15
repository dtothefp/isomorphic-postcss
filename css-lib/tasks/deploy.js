'use strict';

/*
  * deploy.js
  * -------------
  * Task to deploy the dist folder to gh-pages
*/

const gulp = require(`gulp`);
const ghPages = require(`gulp-gh-pages`);

gulp.task(`deploy`, function() {
  return gulp.src(`./dist/**/*`)
    .pipe(ghPages());
});
