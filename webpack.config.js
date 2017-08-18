var path = require('path');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');


module.exports = {
    devtool: 'source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx|es7)$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin()
  ]
};