const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'src');

/**
 * Webpack Configuration
 */
module.exports = {
  entry: {
    vendor: [
      'lodash',
      'babel-polyfill',
      'whatwg-fetch',
    ],
    bundle: path.join(dirApp, 'index')
  },
  resolve: {
    modules: [
      dirNode,
      dirApp,
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      '_': 'lodash'
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/view/index.html'),
      title: 'Method Boilerplate',
      favicon: path.join(__dirname, 'src/public/favicon.png')
    })
  ],
  module: {
    rules: [
      // BABEL
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          compact: true,
        }
      },

      // IMAGES
      {
        test: /\.(jpe?g|png|gif|ico)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[path][name].[ext]'
        }
      },

      // CSS
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  }
};