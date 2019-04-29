import React from 'react';
import {Affix} from 'antd';
import './PPheade.less'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // title: "头部"
        }
    }
    render() {
        return (
            <div>
                {/* 登录nav条 */}
                <div className='g_site_nav_wrap'>
                    <div className='container g_site_nav cf'>
                        <div className="fl phone">
                            <i className="color-b1b1b1 f-s19 iconfont icon-dianhua"></i>
                            服务热线：<span className="strong">10101212</span><span className="color-929da9">（人工 9:00～22:00）</span>
                        </div>
                        <div className="fr">
                            <ul className="site-nav-l fr">

                                <li className="menu">
                                    <a className="own-acount" href="" target="_blank"><i className="iconfont icon-shouji"></i>手机App</a>
                                </li>
                                <li className="menu  g-code">
                                    <a href="" title="扫描微信" ><i className="iconfont icon-weixin"></i></a>
                                    <u className="u-code u-g-wx"></u>
                                </li>

                            </ul>
                            <ul id="topLoginState" className="site-nav-r fr">
                                <li className="menu"><a href="" title="登录">登录</a>|</li>
                                <li className="menu"><a href="" title="注册">注册</a>|</li>
                                <li className="menu"><a href="" target="_blank" title="帮助中心">帮助中心</a>|</li>

                            </ul>
                        </div>
                    </div>
                </div>
                {/* 导航条 */}

                <div className="g-nav-wrap" id="g-nav-wrap">
                    <div id="logo-wrap">
                        <div className="p-rel"><div className="g-fest-bg"></div></div>
                        <div className="mod cf container">
                            <a className="g-fest-link"> </a>
                            <div className="fl">
                                <a className="g-logo" id="g-logo">
                                    <img src={require('./logos_97589d4.png')} alt="" />
                                </a>
                            </div>
                            <div className="fr">
                                <a className="btn-customer" href="/customer">我的账户</a>
                            </div>
                        </div>
                    </div>
                    <Affix >
                        <div className="g-nav-bar cf" id="g-nav-bar" style={{ top: -44 }}>
                            <div className="g-nav">
                                <ul className="nav-c cf" id="g-navList">

                                    <li className="item item-01 active"><a className="" >
                                        首页
                                    </a>
                                    </li>
                                    <li className="item subi down">
                                        <a className="">我要出借</a>
                                    </li>
                                    <li className="item">
                                        <a className="" href="">我要借款</a>
                                    </li>
                                    <li className="item down">
                                        <a className="">品牌新闻</a>
                                    </li>
                                    <li className="item down">
                                        <a className="">社会责任</a>
                                    </li>
                                    <li className="item down">
                                        <a className="">信息披露</a>
                                    </li>
                                    <li className="item">
                                        <a className="">网贷课堂</a>
                                    </li>
                                    <li className="item item-02 fr">
                                        <a className="">会员中心</a>
                                    </li>
                                    <li className="item item-01 g-forum fr">
                                        <a className="">论坛</a>
                                    </li>
                                </ul>
                                <div className="line"></div>
                            </div>
                        </div>
                    </Affix>
                </div>
                {/* 主体main */}
                <div className="mainless">

                </div>



            </div >
        )
    }
}

export default Header