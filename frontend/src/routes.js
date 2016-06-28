import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import Home from './home'

import Profession from './profession'
import ProfDescription from './professionDescription/'

import NotFound from './notFound'

export const routes = (
    <div>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/profession" component={Profession}>
				<Route path="/profession/:profession" component={Profession}></Route>
            </Route>
            <Route path="/profession/:profession/description" component={ProfDescription}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </div>
);