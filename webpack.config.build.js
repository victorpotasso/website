const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackConfig = require('./webpack.config');

const DIR_PUBLIC = path.join(__dirname, 'public');

module.exports = merge(webpackConfig, {
  devtool: 'cheap-module-source-map',
  output: {
    path: DIR_PUBLIC,
    filename: 'assets/[name].js',
    // publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, 'src/public'),
      to: DIR_PUBLIC
    }]),
    new webpack.DefinePlugin({
      APP_IS_DEV: false,
      APP_BASE_PATH: '/'
    })
  ]
});