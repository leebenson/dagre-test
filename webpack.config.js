const path = require('path');
const webpack = require('webpack');

module.exports = {
  resolve: {
    root: './'
  },
  entry: [
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    path.join(__dirname, 'index.js')
  ],
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
    sourceMapFilename: '[file].map'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  debug: true,
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'stage-0',
            'react'
          ]
        }
      }
    ]
  },
  devServer: {
    contentBase: __dirname,
    publicPath: '/',
    hot: true,
    inline: true,
    stats: {
      colors: true
    },
    historyApiFallback: {
      index: 'index.html'
    }
  }
};
