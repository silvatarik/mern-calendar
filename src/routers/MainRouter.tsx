import React from 'react'
import { Route,BrowserRouter,Switch,RouteComponentProps } from 'react-router-dom'
import { routePrivate, routePublic } from '../config/routes'


export const MainRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>

                    {/* -------------  Rutas Públicas --------------------------------*/}
                    {
                        routePublic.map((route, index) => {
                            return (
                                <Route key={index} path={route.path} exact={route.exact}
                                    render={(props: RouteComponentProps<any>) => (
                                        <route.component
                                            name={route.name}
                                            {...props}
                                            {...route.props}
                                        />
                                    )}
                                />
                            )
                        })
                    }

                    {/* -------------  Rutas Privadas --------------------------------*/}

                    {
                        routePrivate.map((route, index) => {
                            return (
                                <Route key={index} path={route.path} exact={route.exact}
                                    render={(props: RouteComponentProps<any>) => (
                                        <route.component
                                            name={route.name}
                                            {...props}
                                            {...route.props}
                                        />
                                    )}
                                />
                            )
                        })
                    }
                </Switch>
            </BrowserRouter>
        </div>
    )
}
