const {resolve} = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.config.base-pc.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const OfflinePlugin = require('offline-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(base, {
  entry: {
    app: resolve(__dirname, '../pc/entry-client.js')
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
    new VueSSRClientPlugin(),
    new CopyWebpackPlugin([{
      from: resolve(__dirname, '../m/assets/pwa'),
      to: resolve(__dirname, '../dist-pc/')
    }]),
    new OfflinePlugin({
      externals: ['/', '/start', '/document', '/hub', '/about']
    })
  ]
})
