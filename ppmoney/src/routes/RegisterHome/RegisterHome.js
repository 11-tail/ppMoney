import React from 'react';

import { connect } from 'dva';
import PPhead from '../../components/PPheade/PPhead';
import PPfooter from '../../components/PPfooter/PPfooter';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import LoginToRegister from '../../components/LoginToRegister/LoginToRegister';
const RegisterHome = () => {
  return (
    <div>
      <PPhead />
      <RegistrationPage />
      <LoginToRegister />
      <PPfooter />
    </div>
  );
};

RegisterHome.propTypes = {
};

export default connect()(RegisterHome);
