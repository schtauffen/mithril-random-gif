var config = require('./webpack.config.js')
var ClosurePlugin = require('webpack-closure-compiler')

// this is not currently working
delete config.devtool
config.output.filename = './public/bundle.min.js'
config.plugins = [
  new ClosurePlugin({
    compiler: {
      language_in: 'ECMASCRIPT6',
      language_out: 'ECMASCRIPT5',
      compilation_level: 'ADVANCED',
    },
    concurrency: 3,
  }),
]

module.exports = config
