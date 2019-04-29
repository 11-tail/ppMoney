import React from 'react';
import { connect } from 'dva';
import PPhead from '../../components/PPheade/PPhead';
import PPfooter from '../../components/PPfooter/PPfooter';
function HomePage() {
    return (
        <div>
            <PPhead />
            <PPfooter />
        </div>
    );
}

HomePage.propTypes = {
};

export default connect()(HomePage);