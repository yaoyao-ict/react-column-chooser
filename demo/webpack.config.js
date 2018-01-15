/* eslint-env node */
const path = require('path');

const moduleConf = {
  rules: [
    {
      enforce: 'pre',
      test: /\.js$/,
      exclude: [/node_modules/, /dist/],
      loader: 'eslint-loader',
    },
    {
      test: /\.js$/,
      exclude: [/node_modules/, /dist/],
      loader: 'babel-loader',
    },
    {
      test: /\.less$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: 'less-loader',
      }],
    },
  ],
};

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './index.js',
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js',
  },
  module: moduleConf,
};
