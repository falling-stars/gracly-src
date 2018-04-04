const {resolve} = require('path')

module.exports = {
  output: {
    path: resolve(__dirname, '../ssr/dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {test: /\.css$/, loader: ['vue-style-loader', 'css-loader']},
      {test: /\.js$/, loader: ['babel-loader'], exclude: /node_modules/},
      {test: /\.scss$/, loader: ['vue-style-loader', 'css-loader', 'sass-loader']},
      {test: /\.less$/, loader: ['vue-style-loader', 'css-loader', 'less-loader']},
      {test: /\.vue$/, loader: ['vue-loader']},
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
            name: 'assets/[name].[hash].[ext]',
            limit: 5000
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.vue'],
    alias: {
      '~': resolve(__dirname, '../client')
    }
  }
}
