'use strict';

/*
  * webpack.js
  * -------------
  * Task to generate webpack bundle
*/

const path = require(`path`);
const gulp = require(`gulp`);
const gutil = require(`gutil`);
const plumber = require(`gulp-plumber`);
const webpack = require(`webpack`);
const webpackDevServer = require(`webpack-dev-server`);
const config = require(`../webpack.config.js`);

gulp.task(`webpack:loadfonts`, function(callback) {
  const compiler = webpack({
    entry: path.resolve(__dirname, `../lib/assets/javascript/loadfonts.js`),
    output: {
      filename: `loadfonts.min.js`,
      path: path.resolve(__dirname, `../lib/assets/javascript`)
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: `babel-loader`,
          query: {
            presets: [ `es2015` ],
            plugins: [],
            babelrc: false,
          },
        },
      ],
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin(),
    ]
  }, (err) => {
    if(err) throw new gutil.PluginError("webpack", err);
    callback();
  });
});

gulp.task(`webpack`, function(callback) {
  const compiler = webpack(config, (err) => {
    if(err) throw new gutil.PluginError("webpack", err);
    callback();
  });
});

gulp.task(`webpack:dev`, function(callback) {
  const babelPlugins = config.module.loaders[0].query.plugins;
  
  config.module.loaders[0].query.plugins = [
    ...babelPlugins,
    [ `react-transform`, {
      transforms: [{
        transform: `react-transform-hmr`,
        imports: [`react`],
        locals: [`module`],
      }],
    }]
  ]
  
  const compiler = webpack({
    ...config,
    entry: [ `webpack-dev-server/client?http://localhost:9000/`, `webpack/hot/dev-server`, ...config.entry ],
    resolve: {
      modules: [
        ...config.resolve.modules,
        path.resolve(__dirname, `../node_modules`),
      ]
    },
    plugins: [
      ...config.plugins,
      new webpack.HotModuleReplacementPlugin(),
    ],
  });
  
  new webpackDevServer(compiler, {
    contentBase: path.resolve(__dirname, `../src/`),
    hot: true,
    stats: {
      colors: true,
      chunks: false,
    },
  }).listen(9000, `localhost`, function(err) {
    if(err) throw new gutil.PluginError(`webpack-dev-server`, err);
    gutil.log(`Webpack dev server running on http://localhost:9000`);
  });
});