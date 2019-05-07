import React from 'react';
import {Affix} from 'antd';
import './PPheade.less'
import { Link } from 'dva/router';
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
                                <Link className="menu" to="longinHome"><a href="" title="登录">登录</a>|</Link>
                                <Link className="menu" to="registerHome"><a href="" title="注册">注册</a>|</Link>
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
                                <Link className="btn-customer" to="longinHome">我的账户</Link>
                            </div>
                        </div>
                    </div>
                    <Affix >
                        <div className="g-nav-bar cf" id="g-nav-bar" style={{ top: -44 }}>
                            <div className="g-nav">
                                <ul className="nav-c cf" id="g-navList">

                                    <Link className="item item-01 active" to="/"><a className="" >
                                        首页
                                    </a>
                                    </Link>
                                    <Link className="item subi down " to="loan">
                                        <a className="">我要出借</a>
                                    </Link>
                                    <Link className="item" to="lend">
                                        <a className="" href="">我要借款</a>
                                    </Link>
                                    <Link className="item down" to="brand">
                                        <a className="">品牌新闻</a>
                                    </Link>
                                    <Link className="item down" to="sociology">
                                        <a className="">社会责任</a>
                                    </Link>
                                    <li className="item down">
                                        <a className="">信息披露</a>
                                    </li>
                                    <li className="item">
                                        <a className="">网贷课堂</a>
                                    </li>
                                    <li className="item item-02 fr">
                                        <a className="">会员中心</a>
                                    </li>
                                    <Link className="item item-01 g-forum fr" to="forumPage">
                                        <a className="">论坛</a>
                                    </Link>
                                </ul>
                                <div className="line"></div>
                            </div>
                        </div>
                    </Affix>
                </div>
                {/* 主体main */}
                {/* <div className="mainless">

                </div> */}



            </div >
        )
    }
}

export default Header