import config from './config'
import util from '../util'
import * as Loadable from 'react-loadable'

let routes:any = util.getRoutes(config)
let MainPage = Loadable({
    loader: () => import('./../../client/container/Main/index'),
    loading: ():null => null,
})
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
  