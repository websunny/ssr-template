interface IParams{
    path: string[],
    exact: boolean, //严格匹配
    title: string, //页面标题
    keywords: string, //关键词
    description: string,//描述
}


const getRoutes = (params:IParams) => {
    let _routes = []
    if (params.path.length > 0) {
        for (let i = 0; i < params.path.length; i++) {
            let _r = params.path[i]
            if (typeof _r === 'string') {
                let _obj = {
                    title: params.title || '',
                    keywords: params.keywords || '',
                    description: params.description || '',
                    path : `${_r}`,
                    exact : params.exact
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
