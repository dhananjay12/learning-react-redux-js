import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/app';

export default (
    <div>
        <Switch>
            <Route path="/" component={App} />
            <Route path="/test" render={() => <h1>test</h1>} />

        </Switch>
    </div>

);