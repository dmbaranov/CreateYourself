import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { routes } from './routes'
import configureStore from './store/configureStore'

import './style.scss'
import './normalize.scss'

export const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={ store }>
        <Router history={ history } routes={ routes }/>
    </Provider>,
    document.getElementById('root')
)