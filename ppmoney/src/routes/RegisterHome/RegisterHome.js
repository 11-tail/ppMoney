import React from 'react';

import { connect } from 'dva';

import RegistrationPage from '../RegistrationPage/RegistrationPage';
import LoginToRegister from '../../components/LoginToRegister/LoginToRegister';
const RegisterHome = () => {
  return (
    <div>
        <RegistrationPage />
        <LoginToRegister />

    </div>
  );
};

RegisterHome.propTypes = {
};

export default connect()(RegisterHome);
