module.exports = {
  entry: './src/index.js',
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
    extensions: ['', '.js', '.json', '/index.js'],
  },
}
