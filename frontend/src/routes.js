import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/login/login';
import Dashboard from './pages/dashboard/dashboard';
import NewSpot from './pages/new/newSpot';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/new" component={NewSpot} />
            </Switch>
        </BrowserRouter>
    );
}