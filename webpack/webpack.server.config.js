const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');

const webpackBaseConfig = require('./webpack.base.config.js');

const srcPath = path.resolve(__dirname, '../', 'src');
const distPath = path.resolve(__dirname, '../', 'dist');

module.exports = merge(webpackBaseConfig, {
  target: 'node',
  entry: './server/index.js',
  output: {
    path: distPath,
    filename: 'server.js'
  },
  node: {
    __dirname: false,
    __filename: false
  },
  externals: nodeExternals(),
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
});
