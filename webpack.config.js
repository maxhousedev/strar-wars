/* eslint-disable prefer-template */
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const src = 'src';
const dist = 'dist';
const entryFileName = 'index.js';

const PORT = 8080;

module.exports = {
  entry: `./${src}/${entryFileName}`,
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, dist),
  },
  devtool: 'eval',
  devServer: {
    port: PORT,
    open: {
      app: {
        name: 'chrome',
      },
    },
    static: {
      directory: path.join(__dirname, dist),
      watch: true,
    },
  },

  module: {
    rules: [
      // js
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      // css
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      // scss
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      // pictures
      {
        test: /\.(webp|jpg|gif)$/,
        use: ['file-loader'],
      },
      // svg
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      // fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/inline',
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: `./${src}/index.html`,
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
};
