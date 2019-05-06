import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import RegistrationPage from './routes/RegistrationPage/RegistrationPage';
import LoginToRegister from './components/LoginToRegister/LoginToRegister';
import RegisterHome from './routes/RegisterHome/RegisterHome';
import LoginPage from './routes/LoginPage/LoginPage';
import LoginHome from './routes/LoginHome/LoginHome';
import forumPage from './routes/forumPage/forumPage';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/loginToRegister" exact component={LoginToRegister} />
        <Route path="/registration" exact component={RegistrationPage} />
        <Route path="/registerHome" exact component={RegisterHome} />
        <Route path="/loginPage" exact component={LoginPage} />
        <Route path="/loginHome" exact component={LoginHome} />
        <Route path="/forumPage" exact component={forumPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
