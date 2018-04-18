const {resolve} = require('path')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const base = require('./webpack.config.base-pc')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const webpackConfig = merge(base, {
  target: 'node',
  entry: {
    ssr: resolve(__dirname, '../pc/entry-server.js')
  },
  output: {
    libraryTarget: 'commonjs2'
  },
  externals: nodeExternals({
    whitelist: /\.css$/,
    'Vue': true
  }),
  plugins: [
    new VueSSRServerPlugin()
  ]
})
module.exports = webpackConfig