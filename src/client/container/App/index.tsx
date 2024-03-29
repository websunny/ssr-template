import  React from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from '../../../controllers'
import './style.less'

class App extends React.Component{
    public state ={

    }
    public routeWithSubRoutes = (route:any, index:number) => (
        <Route
            key={index}
            exact={route.exact || false}
            path={route.path}
            render={props => (
                <route.component
                    {...props}
                    routes={route.routes}
                />
            )}
        />
    )

    public render() {
        return (
            <div className="container">
                <Switch>
                    {routes.map((route:any, index:number) =>
                        this.routeWithSubRoutes(route, index)
                    )}
                </Switch>
            </div>
        )
    }
}

export default App