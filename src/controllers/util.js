const getRoutes = (params = {}, subComponents) => {
    let _routes = []
    if (params && params.routes && params.routes.length > 0) {
        for (let i = 0; i < params.routes.length; i++) {
            params.routes[i].component = subComponents[params.routes[i].componentName]
            delete params.routes[i].componentName
        }
    }
    if (params && params.path && params.path.length > 0) {
        for (let i = 0; i < params.path.length; i++) {
            let _r = params.path[i]
            if (typeof _r === 'string') {
                let _obj = {
                    $title: params.title || '',
                    $keywords: params.keywords || '',
                    $description: params.description || ''
                }
                params.routes != null ? (_obj.routes = params.routes) : 0
                if (params.exact === true) {
                    _obj.exact = true
                }
                _routes.push(_obj)
            }
        }
    }
    return _routes
}

export default {
    getRoutes
}
