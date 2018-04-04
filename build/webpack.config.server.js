const {resolve} = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.config.base')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const webpackConfig = merge(base, {
  target: 'node',
  entry: {
    ssr: resolve(__dirname, '../ssr/src/entry-server.js')
  },
  output: {
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new VueSSRServerPlugin()
  ]
})
module.exports = webpackConfig
