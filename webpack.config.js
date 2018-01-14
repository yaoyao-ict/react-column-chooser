/* eslint-env node */
const path = require('path');

const moduleConf = {
  rules: [
    {
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    },
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
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

module.exports = [
  {
    devtool: 'source-map',
    entry: {
      index: './src/index.js',
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'react-column-chooser.js',
      library: 'react-column-chooser',
      libraryTarget: 'umd',
    },
    module: moduleConf,
  },
  {
    devtool: 'source-map',
    entry: {
      app: './test/index.js',
    },
    output: {
      path: path.join(__dirname, '/test'),
      filename: 'app.js',
    },
    module: moduleConf,
  },
];
