const { resolve } = require('path')
const IS_CLIENT_HOT = process.env.CLIENT_HOT === 'true'
const IS_DEV_SERVER = process.env.DEV_SERVER === 'true'
const resolveApp = relativePath => resolve(process.cwd(), relativePath)  //拼接path
const fileName = IS_CLIENT_HOT ? 'index.html' : 'client.art'
const BUILD_DIR = resolveApp('build/static')

module.exports = {
  viewHtml: BUILD_DIR,
  viewHtmlFile: resolveApp(`build/static//${fileName}`),
  appHtml: resolveApp('src/view/index.html'),
  appFavicon: resolveApp('src/client/images/favicon.ico'),
  appIndexJs:
    IS_CLIENT_HOT || IS_DEV_SERVER
      ? resolveApp('src/client/index.tsx')
      : resolveApp('build/client/index.js'),
  appNodeModules: resolveApp('node_modules'),
}
