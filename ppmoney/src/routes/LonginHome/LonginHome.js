import React from 'react';

import { connect } from 'dva';

import LoginPage from '../LoginPage/LoginPage';
import LoginToRegister from '../../components/LoginToRegister/LoginToRegister';
const LonginHome = () => {
  return (
    <div>
        <LoginPage />
        <LoginToRegister />

    </div>
  );
};

LonginHome.propTypes = {
};

export default connect()(LonginHome);
