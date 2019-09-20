const webpack = require('webpack')
let config = require('./webpack.config')
const WebpackDevServer = require('webpack-dev-server')

const myserver= () => {
  const PORT = 9001
  
  config.output.filename = 'js/bundle.js'
  config.output.publicPath = '/'
  config.entry.app.unshift('webpack/hot/only-dev-server')
  config.entry.app.unshift(
    `webpack-dev-server/client?http://localhost:${PORT}`,
    'webpack/hot/dev-server'
  )
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
  const compiler = webpack(config)
  const server = new WebpackDevServer(compiler, {
    hot: true,
    stats: {
      colors: true
    },
    host: '0.0.0.0',
    quiet:true,
    port: PORT,
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
    disableHostCheck: true,
    publicPath:'/'
  })

  server.listen(PORT, '127.0.0.1', err => {
    if(err){
      console.log(err)
    }else{
      console.log(`Listening at http://localhost:${PORT}`)
    }
  })
}

myserver()