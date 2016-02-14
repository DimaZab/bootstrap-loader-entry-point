// 'use strict';
//
// var webpack = require('webpack');
//
// module.exports = {
//   context: __dirname + '/apps',
//   entry: './app.js',
//
//   output: {
//     path: __dirname + "/public",
//     filename: "bundle.js"
//   },
//
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         loader: 'babel',
//         query: { presets: ['es2015'] }
//       },
//     ]
//   },
//
//   plugins: [
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false,
//         drop_console: true,
//         unsafe: true
//       }
//     })
//   ],
//
//   watch: true,
//   watchOptions: {
//     poll: 100,
//     aggregateTimeout: 100
//   },
// };
