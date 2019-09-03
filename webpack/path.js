const { resolve } = require('path')

const resolveApp = relativePath => resolve(process.cwd(), relativePath)  //拼接path

const BUILD_DIR = resolveApp('build/static')

module.exports = {
  viewHtml: BUILD_DIR,
  viewHtmlFile: resolveApp('build/static/client.art'),
  appHtml: resolveApp('src/view/index.html'),
  appFavicon: resolveApp('src/client/images/favicon.ico'),
  appIndexJs: resolveApp('build/client/index.js'),
  appNodeModules: resolveApp('node_modules'),
}
