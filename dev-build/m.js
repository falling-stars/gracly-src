const {resolve} = require('path')
const base = require('./base')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(base, {
  entry: {
    app: [resolve(__dirname, './main-m.js')]
  },
  output: {
    path: resolve(__dirname, '../dist-m')
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, '../m')
    }
  },
  devServer: {
    contentBase: resolve(__dirname, '../dist-m'),
    proxy: {
      '/api': {
        target: 'https://m.xxx.com/',
        changeOrigin: true
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, './template.html')
    })
  ]
})