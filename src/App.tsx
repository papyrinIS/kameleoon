import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.scss';
import {routes} from './routes';

function App() {
    return (
        <div className="App">
            <Switch>
                {
                    routes.map(route => <Route key={route.path} {...route} exact />)
                }
            </Switch>
        </div>
    );
}

export default App;
