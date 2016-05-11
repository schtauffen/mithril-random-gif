var config = require('./webpack.config.js')

config.devtool = 'source-map'
config.output.filename = './public/bundle.min.js'

module.exports = config
