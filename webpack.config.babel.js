import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const base = path.join.bind(path, __dirname);
const {NODE_ENV} = process.env;

const cssLoader = ({modules} = {}) => {
  const options = {
    importLoaders: 1,
    minimize: false,
  };

  if (modules) {
    Object.assign(options, {
      modules: true,
      localIdentName: `[name]__[local]___[hash:base64:5]`,
    });
  }

  return {
    loader: `css-loader`,
    options,
  };
};
const postcssLoader = {
  loader: `postcss-loader`,
  options: {
    config: {
      path: base(`postcss.config.js`),
    },
  },
};
const makeStyleLoaders = ({modules, prod} = {}) => {
  const loaders = [ cssLoader({modules}), postcssLoader ];

  return modules && !prod ? [ `style-loader?singleton`, ...loaders ] : loaders;
};
const devStyleLoaders = [
  {
    test: /src\/components\/.*\.css$/,
    loaders: makeStyleLoaders({modules: true}),
  },
  {
    test: /\.css$/,
    exclude: /src\/components\/.*\.css$/,
    loader: ExtractTextPlugin.extract({
      fallback: `style-loader`,
      use: makeStyleLoaders(),
    }),
  },
];
const prodStyleLoaders = [
  {
    test: /src\/components\/.*\.css$/,
    loader: ExtractTextPlugin.extract({
      fallback: `style-loader`,
      use: makeStyleLoaders({modules: true, prod: true}),
    }),
  },
  {
    test: /\.css$/,
    exclude: /src\/components\/.*\.css$/,
    loader: ExtractTextPlugin.extract({
      fallback: `style-loader`,
      use: makeStyleLoaders({prod: true}),
    }),
  },
];

export default {
  entry: [
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: NODE_ENV || 'development',
  performance: {
    hints: false,
  },
  resolve: {
    extensions: [ `.js`, `.jsx`, `.css` ],
    mainFields: ['jsnext:main', 'module', 'browser', 'main'],
    modules: [
      `node_modules`,
      base(`src`, `css`),
      base(`css-lib`, `lib`, `assets`, `css`),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /^(.*?\/)?node_modules\/(?!css-lib).+\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              [ 'env', {esmodules: true} ],
              'react'
            ],
            plugins: [
              'transform-object-rest-spread'
            ]
          }
        }
      },
    ].concat(NODE_ENV === 'production' ? prodStyleLoaders : devStyleLoaders)
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: 'main.css',
      allChunks: true,
      ignoreOrder: true,
    }),
  ],
}
