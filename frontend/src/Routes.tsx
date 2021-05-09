import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from 'pages/Home';
import React from 'react';
import Dashboard from 'pages/Dashboard';
function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>

                <Route path="/Dashboard">
                    <Dashboard/>
                </Route>    
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;