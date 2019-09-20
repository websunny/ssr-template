import config from './config'
import util from '../utils'
import Loadable from '@loadable/component'

let routes:any = util.getRoutes(config)
let MainPage = Loadable(() => import('./../../client/container/Main/index'))
let loadData = (dispatch: any, params: any) => {
    return Promise.all([])
}

if (routes.length > 0) {
    for (let i = 0; i < routes.length; i++) {
        routes[i].component = MainPage
        routes[i].loadData = loadData
    }
}

export default routes
  