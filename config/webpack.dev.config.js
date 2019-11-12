const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, {
  module: {},
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    inline: true,
    port: 9000,
  },
});
