import React from 'react';
import { connect } from 'dva';
import PPhead from '../../components/PPheade/PPhead';
import PPfooter from '../../components/PPfooter/PPfooter';
import LoginPage from '../LoginPage/LoginPage';
import LoginToRegister from '../../components/LoginToRegister/LoginToRegister';
const LonginHome = () => {
  return (
    <div>
      <PPhead />
      <LoginPage />
      <LoginToRegister />
      <PPfooter/>
    </div>
  );
};

LonginHome.propTypes = {
};

export default connect()(LonginHome);
