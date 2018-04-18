const {resolve} = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.config.base-m.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
module.exports = merge(base, {
  entry: {
    app: resolve(__dirname, '../m/entry-client.js')
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        manifest: {
          test: /[\\/]node_modules[\\/]/,
          name: 'manifest',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new VueSSRClientPlugin()
  ]
})
