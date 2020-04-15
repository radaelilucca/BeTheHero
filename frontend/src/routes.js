import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
import UpdateIncident from './pages/UpdateIncident';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Logon} />
        <Route exact path="/register" component={Register} />

        <Route exact path="/profile" component={Profile} />
        <Route exact path="/incidents/new" component={NewIncident} />
        <Route exact path="/incidents/update/:id" component={UpdateIncident} />
      </Switch>
    </BrowserRouter>
  );
}
