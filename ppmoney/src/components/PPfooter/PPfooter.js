import React from 'react';
import './PPfooter.less'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // title: "头部"
        }
    }
    render() {
        return (
            <div>
                <div className="g-ft-wrap">


                    <div className="g-ft">
                        <div className="cf">
                            <ul className="ft-nav cf">
                                <li>
                                    <i className="iconfont icon-house"></i>
                                    <div className="ft-info">
                                        <a title="关于我们">关于我们</a>
                                        <ul>
                                            <li><a title="基本信息">基本信息</a></li>
                                            <li><a title="管理团队">管理团队</a></li>
                                            <li><a title="资质证书">资质证书</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <i className="iconfont icon-baozhang"></i>
                                    <div className="ft-info">
                                        <a title="安全保障">安全保障</a>
                                        <ul style={{ lineHeight: '40px'}}>
                                            <li><a title="业务介绍">业务介绍</a></li>
                                            <li><a title="风险管理信息">风险管理信息</a></li>

                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <i className="iconfont icon-dengpao"></i>
                                    <div className="ft-info">
                                        <a title="帮助中心">帮助中心</a>
                                        <ul>
                                            <li><a title="注册登录">注册登录</a></li>
                                            <li><a title="充值提现">充值提现</a></li>
                                            <li><a title="产品介绍">产品介绍</a></li>
                                        </ul>
                                    </div>
                                </li>

                            </ul>

                            <div className="fl">
                                <div className="ft-qr" style={{ marginLeft: 90 }}>
                                    <div className="p-b30">
                                        <img id="footQrcode" src={require('./qr-code.png')} alt="" width="218" />
                                    </div>
                                </div>
                            </div>

                            <div className="fr cf">
                                <div className="kf t-r">
                                    <div className="f-s24 cf">
                                        <div className="fl">
                                            <p className="tip">客户服务热线</p>
                                            <p className="sub-tip">出借人和借款人纠纷解决热线</p>
                                        </div>
                                        <p className="f-s24 fl p-t10">：</p>
                                        <span className="kf-num fl p-t10">10101212</span>
                                    </div>
                                    <p>（人工 9:00~22:00 )</p>
                                    <p className="onlinekf">
                                        <i className="iconfont icon-kefu"></i>24小时在线客服</p>
                                    <ul className="kf-nav cf">
                                        <li className="wx">
                                            <a href="" title="PPmoney微信">
                                                <i className="iconfont icon-weixin"></i>
                                            </a>
                                            <u className="u-code u-g-wx"></u>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="ft-aut cf">
                            <ul className="link-nav cf">
                                <li><a ><u className="u-10"></u></a></li>
                                <li><a ><u className="u-11"></u></a></li>
                                <li><a ><u className="u-12"></u></a></li>
                                <li><a ><u className="u-13"></u></a></li>
                                <li><a ><u className="u-14"></u></a></li>
                                <li><a ><u className="u-15"></u></a></li>
                                <li><a ><u className="u-16"></u></a></li>
                                <li><a ><u className="u-17"></u></a></li>
                            </ul>
                            <div className="agency-box m-tb10 t-c">
                                <div>版权所有 (C) PPmoney.com
                                        <a >粤ICP备 12030634号</a>
                                    <a className="hide" >增值电信业务经营许可证：粤B2-20150286</a>
                                    <a >增值电信业务经营许可证：粤B2-20150286</a>
                                </div>
                                <div>
                                    <a >信息系统安全等级保护备案证明(三级)</a>
                                    <a>
                                        <img src={require('./PPmoney-beian.png')} alt="" />
                                        粤公网安备 44010602001800号
                                        </a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
export default Footer