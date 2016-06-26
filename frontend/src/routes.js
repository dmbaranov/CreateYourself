import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import Home from './home'

import Profession from './profession2'
import ProfessionVariants from './professionsVariants/'

import NotFound from './notFound'

export const routes = (
    <div>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/profession" component={Profession}>
				<Route path="/profession/:profession" component={Profession}/>
            </Route>
            <Route path="/profession-variants" component={ProfessionVariants}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </div>
);