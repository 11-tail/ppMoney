import React from 'react';
// import Slider from 'react-slider-light';
import './Banner.less'
import { Carousel } from 'antd';
class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div style={{ width: '100%', height: '382px', overflow: 'hidden' }}>
                {/*  */}
                {/* <Slider isDots={true} dots={'square'}>
                    <div style={{height:'100%'}}><img src={require('./201904251806292xyxs8Vb.jpg')} alt="" /></div>
                    <div style={{height:'100%',textAlign: 'center',backgroundColor: 'rgb(23, 233, 80)',}}>2</div>
                    <div style={{height:'100%',textAlign: 'center',backgroundColor: 'rgb(233, 85, 65)',}}>3</div>
                </Slider> */}
                <Carousel effect="fade">
                    <div><h3 className="ban1">

                    </h3></div>
                    <div> <h3 className="ban2">

                    </h3></div>
                    <div><h3 className="ban3">

                    </h3></div>
                    <div><h3 className="ban4">

                    </h3></div>
                </Carousel>



                {/* <div className="g-banner cf"> */}
                    <div className="banner-box">
                        <div id="unLogin">
                            <div className="banner-box-hd">
                                <i className="banner-hd-img">历史年化利率</i>
                                <p>PPmoney历史年化利率<i className="banner-hd-rate">6%~12%</i></p>

                            </div>
                            <div className="banner-box-bd">
                                <a className="pp-btn btn-reg">
                                <i className="iconfont icon">
                                </i>注册领礼包</a>
                                <p className="tips">
                                已有账号？
                                <a className="link">立即登录</a></p>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        )
    }
}
export default Banner

