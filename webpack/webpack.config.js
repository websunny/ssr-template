const webpack = require ('webpack')
const path = require('path')
const paths = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')

let webpack_config ={
  entry:{
    app: [paths.appIndexJs]
  },
  output: {
    
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s[x]?$/,
        exclude: paths.appNodeModules,
        use: 'babel-loader'
      },
      {
        test: webpack_isomorphic_tools_plugin.regularExpression('css'),
        use: ['style-loader','css-loader']
      },
      {
        test: webpack_isomorphic_tools_plugin.regularExpression('less'),
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
