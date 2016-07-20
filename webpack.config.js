const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const jeet = require('jeet')
const rupture = require('rupture')
const nib = require('nib')
const axis = require('axis')

module.exports = {
  devtool: 'eval',
  entry: [
    './src/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules(?!\/malatium)/,
        query: {
          presets: [
            'es2015',
            'react',
          ],
          plugins: [
            'transform-object-rest-spread',
            'transform-class-properties',
          ],
        },
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!stylus-loader'),
      }
    ],
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
    extensions: ['', '.js', '/index.js', '.json'],
  },
  plugins: [
    new ExtractTextPlugin('main.css', { allChunks: true }),
  ],
  stylus: {
    use: [jeet(), nib(), rupture(), axis()],
    import: ['~nib/lib/nib/index.styl', '~jeet/stylus/jeet/index.styl'],
  }
}
