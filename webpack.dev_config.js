'use strict';

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    'vendor': './src/vendor.ts',
    'bootstrap': './src/bootstrap.ts',
    'bootstrap-style': 'bootstrap-loader'
  },

  output: {
    path: __dirname + '/src/dist',
    filename: '[name].bundle.js',
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },

  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader', exclude: ['node_modules/rxjs'] },
      { test: /\.css$/, loaders: [ 'style', 'css', 'postcss' ] },
      { test: /\.scss$/, loaders: [ 'style', 'css', 'postcss', 'sass' ] },
      { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
      { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' },
    ],
    noParse: [ /zone\.js\/dist\/.+/, /angular2\/bundles\/.+/ ]
  },

  postcss: [ autoprefixer ],

  node: {
    global: 'window',
    progress: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  },

  watch: true,
  watchOptions: {
    poll: 100,
    aggregateTimeout: 100
  },
};
