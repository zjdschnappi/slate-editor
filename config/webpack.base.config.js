const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: [path.resolve(__dirname, '../src/index.tsx')],
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[hash].js',
  },
  optimization: {
    namedModules: true,
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx|jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader?cacheDirectory=true',
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `./index.html`,
      template: path.resolve(__dirname, '../src/index.html'),
      inject: 'body',
      hash: true,
      minify: {
        collapseWhitespace: true,
      },
    }),
  ],
};
