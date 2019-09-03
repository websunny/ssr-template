import config from './config'
import util from '../util'
import Loadable from 'react-loadable'

let routes = util.getRoutes(config)
let allRoutePath = []
for (let i = routes.length - 1; i >= 0; i--) {
    allRoutePath = allRoutePath.concat(routes[i].path)
}

let MainPage = Loadable({
    loader: () => import('./../../client/container/Main/index'),
    loading: () => null,
    route: allRoutePath
})
let loadData = (dispatch, params) => {
    return Promise.all([])
}

if (routes.length > 0) {
    for (let i = 0; i < routes.length; i++) {
        routes[i].component = MainPage
        routes[i].loadData = loadData
    }
}

export default routes
  