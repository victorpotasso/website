const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  devtool: 'eval',
  output: {
    pathinfo: true,
    publicPath: '/',
    filename: '[name].js'
  },
  devServer: {
    // host: '0.0.0.0',
    contentBase: path.join(__dirname, 'src/public'),
    hot: true,
    inline: true,
    port: process.env.PORT || 4000,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 300
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      APP_IS_DEV: true,
      APP_BASE_PATH: '/'
    })
  ]
});