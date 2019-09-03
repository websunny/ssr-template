const path = require('path')
const paths = require('./path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let webpack_config ={
  entry:{
    app: [paths.appIndexJs]
  },
  output: {
    path: paths.viewHtml
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s[x]?$/,
        exclude: paths.appNodeModules,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader','css-loader','less-loader']
      },
    ]
  },
  resolve: {
    extensions: ['.ts','tsx','.js', '.json', '.less', '.css'],
    alias: {
      '~': path.resolve('src/'),
      '@': path.resolve('src/client/'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      favicon: paths.appFavicon,
      title: 'Blog',
      filename: paths.viewHtmlFile
    })
  ]
}

module.exports = webpack_config
