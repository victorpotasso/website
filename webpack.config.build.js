const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'assets/[name].js',
    // publicPath: '/'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new CleanWebpackPlugin(['docs']),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, 'src/public'),
      to: path.join(__dirname, 'docs')
    }]),
    new webpack.DefinePlugin({
      APP_IS_DEV: false,
      APP_BASE_PATH: '/'
    })
  ]
});