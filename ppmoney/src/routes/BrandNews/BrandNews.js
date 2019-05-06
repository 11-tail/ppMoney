import React from 'react';
// import { connect } from 'dva';
import './BrandNews.less';
// import LendRight from '../../components/LendPage/LendRight'
import PPheade from '../../components/PPheade/PPhead'
import PPfooter from '../../components/PPfooter/PPfooter'
import Report from '../../components/BrandNews/Report'
import VideoColumn from '../../components/BrandNews/VideoColumn'
export default class LendPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ligh1:true,
            ligh2:false,
            judge:true
        }
    }
    tit1(e) {
        e.preventDefault();
        this.setState({ ligh1: true });
        this.setState({ ligh2: false });
        this.setState({ judge: true });
    }
    tit2(e) {
        e.preventDefault();
        this.setState({ ligh1: false });
        this.setState({ ligh2: true });
        this.setState({ judge: false });
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
                        {/* 需要渲染部分内容 */}
                        <div className="wai">
                            <div className="brandmain">
                                <div className="brandTab">
                                    <h3 onClick={this.tit1.bind(this)} className={`brandTitle ${this.state.ligh1 ? 'active' : ''}`}>最新报道</h3>
                                    <h3  onClick={this.tit2.bind(this)} className={`brandTitle ${this.state.ligh2 ? 'active' : ''}`}>视频专栏</h3>
                                </div>
                                {/* 数据渲染 */}
                                <div>
                                    {/* <Report /> */}
                                    {/* <VideoColumn /> */}
                                    {this.state.judge?<Report />:<VideoColumn />}
                                </div>
                            </div>
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

