import React from 'react';
import { connect } from 'dva';
import PPhead from '../../components/PPheade/PPhead';
import PPfooter from '../../components/PPfooter/PPfooter';
import PPbanner from './Banner/Banner'
import PPmain from './Main/Main'
function HomePage() {
    return (
        <div>
            <PPhead />
            <PPbanner />
            <PPmain />
            <PPfooter />
            
        </div>
    );
}

HomePage.propTypes = {
};

export default connect()(HomePage);