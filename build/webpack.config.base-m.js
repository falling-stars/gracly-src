const {resolve} = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  output: {
    path: resolve(__dirname, '../dist-m'),
    filename: '[name].[chunkhash]-m.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'vue-style-loader',
          use: 'css-loader'
        })
      },
      {test: /\.js$/, loader: ['babel-loader'], exclude: /node_modules/},
      {test: /\.scss$/, loader: ['vue-style-loader', 'css-loader', 'sass-loader']},
      {test: /\.less$/, loader: ['vue-style-loader', 'css-loader', 'less-loader']},
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true
        }
      },
      {
        test: /favicon\.ico$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        }]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        exclude: /favicon\.ico$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: 'assets/images/[name].[hash]-m.[ext]',
            limit: 5000
          }
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'common.[chunkhash].css',
      allChunks: true
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.css', '.vue'],
    alias: {
      '~': resolve(__dirname, '../m')
    }
  }
}
