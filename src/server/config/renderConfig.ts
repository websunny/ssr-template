import App from '../../client/container/App'
import getStore from '../../client/reducer/store'
import routes from '../../controllers'

const fetchList: any[] = []
const config = {
  App,
  getStore,
  routes,
  fetchList
}

export default config
