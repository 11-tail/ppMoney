import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import RegistrationPage from './routes/RegistrationPage/RegistrationPage';
import LoginToRegister from './components/LoginToRegister/LoginToRegister';
import RegisterHome from './routes/RegisterHome/RegisterHome';
import LoginPage from './routes/LoginPage/LoginPage';
import LonginHome from './routes/LonginHome/LonginHome';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/loginToRegister" exact component={LoginToRegister} />
        <Route path="/registration" exact component={RegistrationPage} />
        <Route path="/registerHome" exact component={RegisterHome} />
        <Route path="/loginPage" exact component={LoginPage} />
        <Route path="/longinHome" exact component={LonginHome} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
