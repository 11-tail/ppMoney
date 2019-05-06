import React from 'react';

import { connect } from 'dva';

import LoginPage from '../LoginPage/LoginPage';
import LoginToRegister from '../../components/LoginToRegister/LoginToRegister';
import PPhead from '../../components/PPheade/PPhead';

const LoginHome = () => {
  return (
    <div>
        <PPhead/>
        <LoginPage />
        <LoginToRegister />

    </div>
  );
};

LoginHome.propTypes = {
};

export default connect()(LoginHome);

