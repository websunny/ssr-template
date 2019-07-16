import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import routes from '../../../controllers'

@withRouter
export default class App extends Component {

    routeWithSubRoutes = (route, index) => (
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

    render() {
        return (
            <div className="container">
                <Switch>
                    {routes.map((route, index) =>
                        this.routeWithSubRoutes(route, index)
                    )}
                </Switch>
            </div>
        )
    }
}
