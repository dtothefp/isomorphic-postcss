'use strict';

/*
  * clean.js
  * -------------
  * Task to clean bundles folder
*/

const gulp = require(`gulp`);
const del = require(`del`);

gulp.task(`clean`, function(callback) {
  del.sync([
    `dist/**`,
  ]);
  callback();
});
