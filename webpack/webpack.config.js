const path = require('path')
const paths = require('./path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')


const IS_CLIENT_HOT = process.env.CLIENT_HOT === 'true' //是否纯前端渲染
let webpack_config ={
  mode: IS_CLIENT_HOT ? 'development' : 'production',
  context: path.resolve(process.cwd()),
  entry:{
    app: [paths.appIndexJs]
  },
  output: {
    path: paths.viewHtml,
    publicPath:'/'
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s[x]?$/,
        exclude: paths.appNodeModules,
        use: ['babel-loader']
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
    extensions: ['.ts','.tsx','.js','.jsx','.json', '.less', '.css'],
    alias: {
      '~': path.resolve('src/'),
      '@': path.resolve('src/client/'),
    }
  },
  plugins: [
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      favicon: paths.appFavicon,
      title: 'Blog',
      filename: paths.viewHtmlFile
    })
  ]
}

module.exports = webpack_config
