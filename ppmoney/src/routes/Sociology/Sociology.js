
// 第五个页面，社会责任
import React from 'react';
// import { connect } from 'dva';
import './Sociology.less';
import PPheade from '../../components/PPheade/PPhead'
import PPfooter from '../../components/PPfooter/PPfooter'
import Sociologys from '../../components/Sociology/Sociologys'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
export default class LendPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ligh1: true,
            ligh2: false,
            judge: true
        }
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
                            {/* <div className="banner banner-news"></div> */}
                            <Carousel autoplay>
                                <div><img className="yiimg" alt="" src="http://www.ppmoneygroup.com/upload/images/img20181203143303.jpg"/></div>
                                <div><img className="yiimg" alt="" src="http://www.ppmoneygroup.com/upload/images/img20181212120051.jpg"/></div>
                                <div><img className="yiimg" alt="" src="http://www.ppmoneygroup.com/upload/images/img20190423161541.jpg"/></div>
                            </Carousel>
                        </div>
                        {/* 需要渲染部分内容 */}
                        <div className="wai">
                            <div className="brandmain">
                                <div className="brandTab">
                                    <h3 className="brandTitle">最新报道</h3>
                                </div>
                                {/* 数据渲染 */}
                                <div>
                                    <Sociologys />
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

