var path         = require('path');
const fs         = require('fs');
const configs    = require('./dev-wpk-conf');
const HtmlPlugin = require('html-webpack-plugin');
const Dotenv     = require('dotenv-webpack');
const webpack    = require('webpack');
const dirPath    = fs.realpathSync(process.cwd());

const config = {
    entry: {
      bundle: path.resolve(dirPath, '../src/index.js'),
      vendor: configs.vendor
    },
    output: {
      path: path.resolve(dirPath, '../dist'),
      filename: '[name].[hash].js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        public: 'jackhegarty.io'
      },
    module: {
      rules: [
        configs.jsonLoader,
        configs.babelLoader,
        configs.imgLoader,
      ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'manifest'] }),
      new HtmlPlugin({ template: './src/index.html' }),
      new Dotenv()
    ]
  }

module.exports = config;