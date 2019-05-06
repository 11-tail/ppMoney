import React from 'react';

import { connect } from 'dva';

import RegistrationPage from '../RegistrationPage/RegistrationPage';
import LoginToRegister from '../../components/LoginToRegister/LoginToRegister';
import PPhead from '../../components/PPheade/PPhead';
const RegisterHome = () => {
  return (
    <div>
        <PPhead/>
        <RegistrationPage />
        <LoginToRegister />

    </div>
  );
};

RegisterHome.propTypes = {
};

export default connect()(RegisterHome);
