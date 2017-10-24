import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/app';
import Signin from './components/auth/signin';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="/signin" component={Signin}/>
            </Route>
        </Router>
    </Provider>
    , document.querySelector('.container'));
