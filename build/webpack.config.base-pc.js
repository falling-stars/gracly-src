const {resolve} = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
module.exports = {
  output: {
    path: resolve(__dirname, '../dist-pc'),
    filename: '[name].[chunkhash]-pc.js',
    publicPath: '/'
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
        test: /\.(gif|eot|ttf|woff2?|svgz?)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            name: 'assets/images/[name].[hash]-pc.[ext]',
            limit: 5000
          }
        }]
      },
      {
        test: /\.(png|jpe?g)$/i,
        use: [
          {
            loader: 'image-webp-loader',
            options: {
              outputPath: resolve(__dirname, '../dist-pc'),
              name: 'assets/images/[name].[hash]-pc.[ext]',
              subQuality: {
                'user.jpeg': 85,
                'index-back.jpg': 95
              },
              requestType: 'img'
            }
          }
        ]
      },
      {
        test: /favicon\.ico$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        }]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ExtractTextPlugin({
      filename: 'common.[chunkhash].css',
      allChunks: true
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.css', '.vue'],
    alias: {
      '~': resolve(__dirname, '../pc')
    }
  }
}
