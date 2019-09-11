import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { matchRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import * as React from 'react'

interface Option {
    App: any;
    getStore: any;
    routes: any;
    fetchList: any[];
}

const clearUrl = (url: any) => {
    if (!url) {
        return ''
    }
    return url.split('?')[0]
}
 
const renderMiddleware = ({ App, getStore, routes, fetchList }: Option) => async (ctx: any, next: any) => {
    const loadBranchData = (store: any, _url: string, branch: any) => {
        const promises = branch.map(({ route, match }: any) => {
            if (route.loadData) {
                return route.loadData({
                    dispatch: store.dispatch,
                    params: match.params,
                    query: ctx.request.query
                })
            }
            return Promise.resolve(null)
        })
        return Promise.all(promises)
    }


    const branch: any[] = matchRoutes(routes, clearUrl(ctx.req.url))

    if (branch.length > 0) {
        const branchRoute = branch[0].route

        if (branchRoute.path.startsWith('/') || branchRoute.path === "*") {

            const store = getStore()
            const routerContext = {}

            /** 请求公用接口 */
            if(fetchList.length){
                const promiseList = fetchList.map((item:any) => ({
                    ...item,
                    params: {
                        ...item.params,
                    }
                }))
                await Promise.all(promiseList.map((item: any) => store.dispatch(item.action(item.params))))
            }
            /** 请求页面接口 */
            await loadBranchData(store, ctx.req.url, branch)

            const rootContent = renderToString(
                <Provider store={ store } >
                    <StaticRouter location={ ctx.req.url } context = { routerContext } >
                        <App/>
                    </StaticRouter>
                </Provider>
            )


            const storeState = store.getState()

            /** 页面渲染 */
            await ctx.render('client', {
                root: rootContent,
                store: storeState,
            })
        } else {
            await next()
        }
    } else {
        await next()
    }
}

export default renderMiddleware
