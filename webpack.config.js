const path = require('path')

module.exports = {
  devtool: 'eval',
  entry: [
    './src/index.js',
  ],
  output: {
    filename: './public/bundle.js',
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
          ],
          plugins: [
//            'transform-runtime',
            'transform-object-rest-spread',
          ],
        },
      },
    ],
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
    extensions: ['', '.js', '.json', '/index.js'],
  },
}
