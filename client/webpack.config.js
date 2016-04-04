var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './app/app.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass')}
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {
      allChunks: true
    })
  ],
  sassLoader: {
    includePaths: [
      __dirname + '/assets/sass',
      __dirname + '/node_modules/support-for/sass',
      __dirname + '/node_modules/normalize-scss/sass'
    ]
  }
}
