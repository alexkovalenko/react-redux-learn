import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import PostsIndex from './components/posts_index';
import PostViewer from './components/post _viewer';
import PostNew from './components/post_new';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter forceRefresh={false}>
            <Switch>
                <Route path="/posts/new" component={PostNew}/>
                <Route path="/posts/:id" component={PostViewer}/>
                <Route path="/" component={PostsIndex}/>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
