'use strict';

const path = require('path');
const webpackMerge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const webpackConfig = webpackMerge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 9000,
  },
});

module.exports = webpackConfig;
