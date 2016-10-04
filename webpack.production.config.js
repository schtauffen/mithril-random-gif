var config = require('./webpack.config.js')

config.devtool = 'source-map'
config.output.filename = 'bundle.min.js'
// TODO - minify css
// TODO - fix "start" command

module.exports = config
