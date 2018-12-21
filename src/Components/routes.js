import React from 'react';
import Home from './home';
import About from './About';
import { Route, Switch } from 'react-router-dom';
import Error from './error';

const Routes = function () {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route component={Error} />
        </Switch>
    )
}

export default Routes;