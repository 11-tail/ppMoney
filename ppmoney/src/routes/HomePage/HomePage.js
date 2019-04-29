import React from 'react';
import { connect } from 'dva';
import PPhead from '../../components/PPheade/PPhead';
function HomePage() {
    return (
        <div>
            <PPhead />
            
        </div>
    );
}

HomePage.propTypes = {
};

export default connect()(HomePage);