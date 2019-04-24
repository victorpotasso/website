const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIR_NODE = 'node_modules';
const DIR_APP = path.join(__dirname, 'src');

/**
 * Webpack Configuration
 */
module.exports = {
  entry: {
    bundle: path.join(DIR_APP, 'boot.js')
  },
  resolve: {
    modules: [
      DIR_NODE,
      DIR_APP,
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      title: 'Victor Potasso | Front End Developer',
      // favicon: path.join(__dirname, 'src/public/favicon.png')
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread'
            ]
          }
        }
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[path][name].[ext]'
        }
      }
    ]
  }
};