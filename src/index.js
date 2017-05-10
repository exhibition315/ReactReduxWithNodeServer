import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './components/App.js';
import LoginContainer from './containers/LoginContainer.js';
import Main from './components/Main.js';

let store = applyMiddleware(thunk)(createStore)(reducers);

ReactDOM.render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Main} onEnter={requireAuth} />
                <Route path="login" component={LoginContainer} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('root'));

function requireAuth(nextState, replace) {
    if (!sessionStorage.auth) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}