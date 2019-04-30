import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import RegistrationPage from './routes/RegistrationPage/RegistrationPage';
import LoginToRegister from './components/LoginToRegister/LoginToRegister';
import RegisterHome from './routes/RegisterHome/RegisterHome';
import LoginPage from './routes/LoginPage/LoginPage';
import LonginHome from './routes/LonginHome/LonginHome';
// 我要借款页面
import LoanPage from './routes/LoanPage/LoanPage';
// 我要借出页面
import LendPage from './routes/LendPage/LendPage'

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
        <Route path="/loan" exact component={LoanPage} />
        <Route path="/lend" exact component={LendPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
