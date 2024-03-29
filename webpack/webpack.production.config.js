const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');

const srcPath = path.resolve(__dirname, '../', 'src');
const distPath = path.resolve(__dirname, '../', 'dist');

module.exports = merge(webpackBaseConfig, {
  target: 'web',
  entry: './client/index.js',
  output: {
    path: distPath,
    filename: 'client.js',
    publicPath: './'
  },
  plugins: [
    new UglifyJSPlugin(), // Tree Shaking，精简输出
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
});
