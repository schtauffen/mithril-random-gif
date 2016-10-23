const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const jeet = require('jeet')
const rupture = require('rupture')
const nib = require('nib')
const axis = require('axis')

module.exports = {
  devtool: 'source-map', //eval',
  entry: [
    'whatwg-fetch',
    './src/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules(?!\/malatium)/,
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!stylus-loader'),
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '/index.js', '.json'],
  },
  plugins: [
    new ExtractTextPlugin('main.css', { allChunks: true }),
  ],
  stylus: {
    use: [jeet(), nib(), rupture(), axis()],
    //    import: [
    //      'nib/lib/nib/index.styl',
    //      'jeet/stylus/jeet/index.styl',
    //      'src/shared/global.styl',
    //    ],
  },
}
