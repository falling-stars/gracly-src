const {resolve} = require('path')
const base = require('./base')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(base, {
  entry: {
    app: [resolve(__dirname, './main-pc')]
  },
  output: {
    path: resolve(__dirname, '../dist-pc')
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, '../pc')
    }
  },
  devServer: {
    contentBase: resolve(__dirname, '../dist-pc'),
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