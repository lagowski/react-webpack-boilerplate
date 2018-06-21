import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import indexRoutes from 'routes/index.js';
import configureStore from './store/configureStore';
import { history } from './helpers';

const store = configureStore();


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                {/*Define routes from routes/index.js*/}
                {indexRoutes.map((prop, key) => {
                    return <Route path={prop.path} component={prop.component} key={key} />;
                })}
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
