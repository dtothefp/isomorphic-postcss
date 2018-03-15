'use strict';

/*
  * default.js
  * -------------
  * Default task triggered when you run `gulp`.
  * Starts a watcher to lint and bundle ES2015 modules as you work.
*/

const gulp = require(`gulp`);

gulp.task(`default`, [ `webpack:dev` ]);
gulp.task(`build`, [ `copy`, `clean`, `webpack` ]);
