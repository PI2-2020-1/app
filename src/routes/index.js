import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import UpdateProfile from '../pages/UpdateProfile';
import Reports from '../pages/Reports';
import Notification from '../pages/Notification';

import SignUpVerification from '../pages/SignUpVerification';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/verification" component={SignUpVerification} />

      <Route path="/home" component={Home} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/user/edit" component={UpdateProfile} isPrivate />
      <Route path="/reports" component={Reports} isPrivate />
      <Route path="/notification" component={Notification} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
