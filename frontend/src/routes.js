import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import Home from './home'

import Profession from './profession'

import NotFound from './notFound'

export const routes = (
    <div>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/:profession" component={Profession}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </div>
);