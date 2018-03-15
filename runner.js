import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import express from 'express';
import config from './webpack.config.babel';
import template from './src/template';
import bs from './src/bootstrap';

const appPath = require.resolve('./src/components/App');
const middleware = (req, res, next) => {
  if (req.url !== '/') return next();

  const {store} = bs();

  delete require.cache[appPath]

  const {default: App} = require(appPath);
  const app = (
    <Provider store={store}>
      <App />
    </Provider>
  );

  const appString = renderToString(app);

  res.send(
    template({
      body: appString
    })
  );
};
const devServerConfig = {
  contentBase: 'dist',
  hotOnly: true,
  port: 8080,
  host: '0.0.0.0',
  before(app) {
    app.use(middleware);
  }
};
const {NODE_ENV} = process.env;
let compiler, server;

if (NODE_ENV === 'development') {
  WebpackDevServer.addDevServerEntrypoints(config, devServerConfig);
  compiler = webpack(config);
  server = new WebpackDevServer(compiler, devServerConfig);
} else {
  const app = express();
  compiler = webpack(config);
  app.use(express.static(devServerConfig.contentBase));
  app.get('/', middleware);
  compiler.run((err, stats) => {
    console.log(stats.toString());
  });
  server = {app, listen: app.listen.bind(app)};
}

let hasRun = false;

compiler.hooks.done.tap('done', (stats) => {
  const {port, host} = devServerConfig;

  server.listen(port, host, (err) => {
    if (err) {
      console.err(err);
    }
    console.log('==> 🔥  Webpack development server listening on port %s', port);
    hasRun = true;
  });
});

