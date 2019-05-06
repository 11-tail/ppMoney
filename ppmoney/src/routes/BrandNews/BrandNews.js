import React from 'react';
// import { connect } from 'dva';
import './BrandNews.less';
// import LendRight from '../../components/LendPage/LendRight'
import PPheade from '../../components/PPheade/PPhead'
import PPfooter from '../../components/PPfooter/PPfooter'
export default class LendPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
   
    render() {
        return (
            <div>
                <div>
                    {/* 头部 */}
                    <div>
                        <PPheade />
                    </div>
                    {/* lend的main部分 */}
                    <div>
                        <div className="banner-wrap">
                            <div className="banner banner-news"></div>
                        </div>
                    </div>

                    {/* 尾部 */}
                    <div>
                        <PPfooter />
                    </div>
                </div>
            </div>
        )
    }
}

