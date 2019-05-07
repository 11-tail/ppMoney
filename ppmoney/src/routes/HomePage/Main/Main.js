import React from 'react';
import './Main.less'
import { Icon } from 'antd';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                {/* 第一个板块 */}
                <div className="i-mod-wrap i-mod-intro-wrap">
                    <div className="i-mod-intro i-mod cf">
                        <div className="i-dc">
                            <ul className="dc-list cf">
                                <li>
                                    <span>累计现金交易总额</span>
                                    <label id="CashTradingVol">1213<span>亿</span>0916<span>万</span>9743<span className="normal">元</span></label>
                                </li>


                                <li>
                                    <span>为用户赚取收益</span>
                                    <label id="TotalProfit">32<span>亿</span>3656<span>万</span>3910<span className="normal">元</span></label>
                                </li>
                                <li className="personNum">
                                    <span>服务人数</span>
                                    <label id="YesterdayVolume">4453<span>万</span>3869<span className="normal">人</span></label>
                                    <em className="line"></em>
                                </li>
                                <li>
                                    <span>安全运营时间</span>
                                    <label id="TodayVolume">2329<span className="normal">天</span></label>
                                </li>
                            </ul>
                        </div>
                        <a className="intro-more-btn">详情 &gt;</a>
                    </div>
                </div>
                {/* 第二个板块 */}
                <div className="i-mod-wrap i-mod-notice-wrap">
                    <div className="i-mod-intro i-mod cf">
                        <ul className="i-notice-list cf" id="i-notice-list">
                            <li className="item">
                                <a className="intro-l pointer-d" href="">
                                    <u className="u-intro-00" ><i className="h-spin"></i></u>
                                    <h3>银行存管</h3>
                                    <span>所有资金流转均在<br />厦门银行内完成</span>
                                </a>
                            </li>
                            <li className="item">
                                <a className="intro-l pointer-d" href="">
                                    <u className="u-intro-01" ><i className="h-spin"></i></u>
                                    <h3>普惠金融</h3>
                                    <span>专注于小额分散的<br />消费金融</span>
                                </a>
                            </li>
                            <li className="item">
                                <a className="intro-l pointer-d" href="">
                                    <u className="u-intro-02" ><i className="h-spin"></i></u>
                                    <h3>自助投标</h3>
                                    <span>智能的科技金融<br />服务体系</span>
                                </a>
                            </li>
                            <li className="item">
                                <a className="intro-l pointer-d" href="">
                                    <u className="u-intro-03" ><i className="h-spin"></i></u>
                                    <h3>会员单位</h3>
                                    <span>中国互联网金融协会<br />首批会员</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* 第三个板块 */}
                <div className="i-mod-wrap js_anxin">
                    <div className="i-mod">
                        <div className="i-rookie i-prj cf">
                            <div className="i-mod-ban bg-navyBlue">
                                <div className="i-mod-tips-up"></div>
                                <div className="i-mod-tips-down"></div>
                                <div className="i-prod i-prod-box anxin-box"></div>
                            </div>
                            <div className="i-cate i-cate-prj">
                                <div className="dq-prj-box cf" style={{ position: 'relative' }}>
                                    <div className="prj-hd hd cf prj-self-help-invest">
                                        <span className="sh-title">立即出借</span>
                                        <span className="sh-msg pp-poptip-box">
                                            出借人适当性管理告知
                                            <i className="sh-tips"></i>
                                            <div className="pp-poptip" style={{ width: '330px' }}>
                                                <div className="pp-poptip-shadow">
                                                    <div className="pp-poptip-container">
                                                        <div className="pp-poptip-arrow pp-poptip-arrow-6">
                                                            <em></em>
                                                            <span></span>
                                                        </div>
                                                        <div className="pp-poptip-content  t-l">
                                                            作为网络借贷的出借人，应当具备投资风险意识，风险识别能力，对互联网金融有一定的了解。请您在出借前，确保了解借款项目的主要风险，同时确认具有相应的风险认知和承受能力，并自行承担出借可能产生的相关损失。
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="sh-handle fl">
                                        <dl>
                                            <dd>
                                                <span className="sh-input-t">服务期限</span>
                                                <div className="sh-input-c">
                                                    <div className="pp-select-box js_limit-select" style={{ zIndex: 'auto' }}>
                                                        <div className="dropdown-toggle">
                                                            <span>365天</span>
                                                            <i className="iconfont fr"></i>
                                                        </div>
                                                        <ul className="pp-dropdown-menu js_pp-dropdown-menu-zzt" id="" style={{ display: 'none' }}>
                                                            <li data-value="182">182天</li>
                                                            <li data-value="274">274天</li>
                                                            <li data-value="365">365天</li>
                                                            <li data-value="548">548天</li>
                                                        </ul>
                                                        <input type="hidden" id="sh-select" value="365" />
                                                    </div>
                                                </div>
                                            </dd>
                                            <dd>
                                                <span className="sh-input-t">出借金额</span>
                                                <div className="sh-input-c p-rel">
                                                    <input type="text" className="sh-text js_investNum" value="" />
                                                    <span className="yuan">元</span>
                                                </div>
                                            </dd>
                                        </dl>
                                        <div className="sh-handle-info">
                                            <h3>当您使用安心投服务工具进行出借服务时，将授权PPmoney为您选择以下类型的标的进行循环出借：</h3>
                                            <ul>
                                                <li>借款期限60个月以内</li>
                                                <li>债权明细合规披露</li>
                                                <li>额度合规，资产穿透</li>
                                                <li>多层风控，审核严谨</li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className="sh-content fl">
                                        <ul>
                                            <div class="no-list axt">
                                                <h3>安心投服务工具说明</h3>
                                                <p>当您选择指定服务期后，会展示对应的安心投服务，此时您可以查看服务详情或输入授权出借金额进行出借服务。</p>
                                            </div>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 第四个板块 */}
                <div className="i-mod-wrap js_anxin">
                    <div className="i-mod">
                        <div className="i-rookie i-prj cf">
                            <div className="i-mod-ban bg-pink">
                                <div className="i-mod-tips-up"></div>
                                <div className="i-mod-tips-down"></div>
                                <div className="i-prod i-prod-box exprj-box"></div>
                            </div>
                            <div className="i-cate i-cate-prj">
                                <div className="dq-prj-box cf" style={{ position: 'relative' }}>
                                    <div className="prj-hd hd cf prj-self-help-invest">
                                        <span className="sh-title">立即出借</span>
                                        <span className="sh-msg pp-poptip-box">
                                            出借人适当性管理告知
                                            <i className="sh-tips"></i>
                                            <div className="pp-poptip" style={{ width: '330px' }}>
                                                <div className="pp-poptip-shadow">
                                                    <div className="pp-poptip-container">
                                                        <div className="pp-poptip-arrow pp-poptip-arrow-6">
                                                            <em></em>
                                                            <span></span>
                                                        </div>
                                                        <div className="pp-poptip-content  t-l">
                                                            作为网络借贷的出借人，应当具备投资风险意识，风险识别能力，对互联网金融有一定的了解。请您在出借前，确保了解借款项目的主要风险，同时确认具有相应的风险认知和承受能力，并自行承担出借可能产生的相关损失。
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="sh-handle fl">
                                        <dl>
                                            <dd>
                                                <span className="sh-input-t">锁定期</span>
                                                <div className="sh-input-c">
                                                    <div className="pp-select-box js_limit-select" style={{ zIndex: 'auto' }}>
                                                        <div className="dropdown-toggle">
                                                            <span>365天</span>
                                                            <i className="iconfont fr"></i>
                                                        </div>
                                                        <ul className="pp-dropdown-menu js_pp-dropdown-menu-zzt" id="" style={{ display: 'none' }}>
                                                            <li data-value="182">182天</li>
                                                            <li data-value="274">274天</li>
                                                            <li data-value="365">365天</li>
                                                            <li data-value="548">548天</li>
                                                        </ul>
                                                        <input type="hidden" id="sh-select" value="365" />
                                                    </div>
                                                </div>
                                            </dd>
                                            <dd>
                                                <span className="sh-input-t">出借金额</span>
                                                <div className="sh-input-c p-rel">
                                                    <input type="text" className="sh-text js_investNum" value="" />
                                                    <span className="yuan">元</span>
                                                </div>
                                            </dd>
                                        </dl>
                                        <div className="sh-handle-info">
                                            <h3>当您使用安心投服务工具进行出借服务时，将授权PPmoney为您选择以下类型的标的进行循环出借：</h3>
                                            <ul>
                                                <li>借款期限60个月以内</li>
                                                <li>债权明细合规披露</li>
                                                <li>额度合规，资产穿透</li>
                                                <li>多层风控，审核严谨</li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className="sh-content fl">
                                        <ul>
                                            <div class="no-list">
                                                <h3>自助投标工具说明</h3>
                                                <p>当您选择授权期后，会展示对应的自助投服务，此时您可以查看服务详情或输入授权出借金额进行出借服务。</p>
                                            </div>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 第五个板块 */}
                <div className="i-mod-wrap js_anxin">
                    <div className="i-mod">
                        <div className="i-rookie i-prj cf">
                            <div className="i-mod-ban bg-blue">
                                <div className="i-mod-tips-up"></div>
                                <div className="i-mod-tips-down"></div>
                                <div className="i-prod i-prod-box guide-box"></div>
                            </div>
                            <div className="i-cate i-cate-prj">
                                <div className="dq-prj-box cf" style={{ position: 'relative' }}>
                                    <div className="prj-hd hd cf">
                                        <h2>
                                            <Icon
                                                type="smile"
                                                style={{ fontSize: ' 22px', color: ' #0f91dd', marginTop: '2px' }}
                                            />
                                            {/* <i className="icon iconfont">图标</i> */}
                                            散标专区
                                        </h2>
                                        <a className="prj-more" href="" target="_blank">更多 &gt;</a>
                                    </div>


                                    <ul id="prjDQNew" className="prj-dq i-cate-list cf">
                                        <li className="i-cate-item item00">
                                            <a href="">
                                                <div className="prj-hd cf">
                                                    <h2 className="prj-title">散标[20190504-903]</h2>
                                                </div>
                                                <div className="item-bd cf">
                                                    <div className="fl">
                                                        <div className="cat-box-hd">
                                                            <strong className="pre-profit">历史年化利率
                                                                <div className="pp-poptip " style={{ width: '230px' }}>
                                                                    <div className="pp-poptip-shadow">
                                                                        <div className="pp-poptip-container">
                                                                            <div className="pp-poptip-arrow pp-poptip-arrow-1">
                                                                                <em></em>
                                                                                <span></span>
                                                                            </div>
                                                                            <div className="pp-poptip-content  t-l">
                                                                                历史年化利率的计算依据是历史同期同类型项目过往的回款扣除应支付费用后实际所获取的利息与出借（或受让）本金的比率，据此换算成的年化利率，不构成本平台对出借人可能获得利息的任何承诺；本平台提醒您：借款人可能存在违约风险，出借有风险，选择需谨慎。
                                                                             </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </strong>
                                                            <label>
                                                                <span className="em">8.5</span>
                                                                <span className="u">%</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item-ft cf">
                                                    <div className="money-tips">
                                                        项目金额
                                                        <span className="v">1.5</span>万元
                                                    </div>
                                                    <div className="money-tips lock-tips">
                                                        <strong className="prjlimit">
                                                            项目期限
                                                        </strong>
                                                        <label>
                                                            <span className="strong">12</span>
                                                            <span className="v">个月</span>
                                                        </label>
                                                    </div>
                                                    <div className="invest-box cf">
                                                        <div className="btn-box">
                                                            <a href="" className="btn btn-primary btn-finished">回款中</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="i-cate-item item01">
                                            <a href="">
                                                <div className="prj-hd cf">
                                                    <h2 className="prj-title">散标[20190504-902]</h2>
                                                    <div></div>
                                                    <div className="hd-tips"></div>
                                                </div>
                                                <div className="item-bd cf">
                                                    <div className="fl">
                                                        <div className="cat-box-hd">
                                                            <strong className="pre-profit">
                                                                历史年化利率
                                                                <div className="pp-poptip " style={{ width: '230px' }}>
                                                                    <div className="pp-poptip-shadow">
                                                                        <div className="pp-poptip-container">
                                                                            <div className="pp-poptip-arrow pp-poptip-arrow-1">
                                                                                <em></em>
                                                                                <span></span>
                                                                            </div>
                                                                            <div className="pp-poptip-content  t-l">
                                                                                历史年化利率的计算依据是历史同期同类型项目过往的回款扣除应支付费用后实际所获取的利息与出借（或受让）本金的比率，据此换算成的年化利率，不构成本平台对出借人可能获得利息的任何承诺；本平台提醒您：借款人可能存在违约风险，出借有风险，选择需谨慎。
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </strong>
                                                            <label>
                                                                <span className="em">8.5</span>
                                                                <span className="u">%</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item-ft cf">
                                                    <div className="money-tips">
                                                        项目金额
                                                        <span className="v">9,000</span>元
                                                    </div>
                                                    <div className="money-tips lock-tips">
                                                        <strong className="prjlimit">
                                                            项目期限
                                                        </strong>
                                                        <label>
                                                            <span className="strong">12</span>
                                                            <span className="v">个月</span>
                                                        </label>
                                                    </div>
                                                    <div className="invest-box cf">
                                                        <div className="btn-box">
                                                            <a href="" className="btn btn-primary btn-finished">回款中</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="i-cate-item item02">
                                            <a href="">
                                                <div className="prj-hd cf">
                                                    <h2 className="prj-title">散标[20190504-901]</h2>
                                                    <div></div>
                                                    <div className="hd-tips"></div>
                                                </div>
                                                <div className="item-bd cf">
                                                    <div className="fl">
                                                        <div className="cat-box-hd">
                                                            <strong className="pre-profit">
                                                                历史年化利率
                                                                <div className="pp-poptip " style={{ width: '230px' }}>
                                                                    <div className="pp-poptip-shadow">
                                                                        <div className="pp-poptip-container">
                                                                            <div className="pp-poptip-arrow pp-poptip-arrow-1">
                                                                                <em></em>
                                                                                <span></span>
                                                                            </div>
                                                                            <div className="pp-poptip-content  t-l">
                                                                                历史年化利率的计算依据是历史同期同类型项目过往的回款扣除应支付费用后实际所获取的利息与出借（或受让）本金的比率，据此换算成的年化利率，不构成本平台对出借人可能获得利息的任何承诺；本平台提醒您：借款人可能存在违约风险，出借有风险，选择需谨慎。
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </strong>
                                                            <label>
                                                                <span className="em">8.5</span>
                                                                <span className="u">%</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item-ft cf">
                                                    <div className="money-tips">
                                                        项目金额
                                                        <span className="v">1</span>万元
                                                    </div>
                                                    <div className="money-tips lock-tips">
                                                        <strong className="prjlimit">
                                                            项目期限
                                                        </strong>
                                                        <label>
                                                            <span className="strong">12</span>
                                                            <span className="v">个月</span>
                                                        </label>

                                                    </div>
                                                    <div className="invest-box cf">
                                                        <div className="btn-box">
                                                            <a href="" className="btn btn-primary btn-finished">回款中</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="i-cate-item item03">
                                            <a href="">
                                                <div className="prj-hd cf">
                                                    <h2 className="prj-title">散标[20190503-903]</h2>
                                                    <div></div>
                                                    <div className="hd-tips"></div>
                                                </div>
                                                <div className="item-bd cf">
                                                    <div className="fl">
                                                        <div className="cat-box-hd">
                                                            <strong className="pre-profit">
                                                                历史年化利率
                                                                <div className="pp-poptip " style={{ width: '230px' }}>
                                                                    <div className="pp-poptip-shadow">
                                                                        <div className="pp-poptip-container">
                                                                            <div className="pp-poptip-arrow pp-poptip-arrow-1">
                                                                                <em></em>
                                                                                <span></span>
                                                                            </div>
                                                                            <div className="pp-poptip-content  t-l">
                                                                                历史年化利率的计算依据是历史同期同类型项目过往的回款扣除应支付费用后实际所获取的利息与出借（或受让）本金的比率，据此换算成的年化利率，不构成本平台对出借人可能获得利息的任何承诺；本平台提醒您：借款人可能存在违约风险，出借有风险，选择需谨慎。
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </strong>
                                                            <label>
                                                                <span className="em">8.5</span>
                                                                <span className="u">%</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item-ft cf">
                                                    <div className="money-tips">
                                                        项目金额
                                                        <span className="v">6,800</span>元
                                                    </div>
                                                    <div className="money-tips lock-tips">
                                                        <strong className="prjlimit">
                                                            项目期限
                                                        </strong>
                                                        <label>
                                                            <span className="strong">12</span>
                                                            <span className="v">个月</span>
                                                        </label>
                                                    </div>
                                                    <div className="invest-box cf">
                                                        <div className="btn-box">
                                                            <a href="" className="btn btn-primary btn-finished">回款中</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="solid"></div>
                                    <div class="solid-v"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 三农  */}
                <div className="i-mod-wrap" style={{ background: ' #f5f5f5' }} id="threeRuralBannerBox">
                    <div className="i-mod" id="threeRuralBanner">
                        <a href="">
                            <img src={require('./banner_indexjpg.jpg')} alt="万惠三农" />
                        </a>
                    </div>
                </div>
                {/* 公司动态 */}
                <div className="i-mod-wrap" style={{ background: ' #f5f5f5' }}>
                    <div className="i-mod">
                        <div className="cat-cinfo cf">
                            <div className="cinfo-l">
                                <div className="pp-tab">
                                    <ul className="pp-tab-list cf">
                                        <li className="on"><a href="">公司动态</a></li>
                                        <li className=""><a href="">媒体报道</a></li>
                                        <li className=""><a href="">专题回顾</a></li>
                                        <li className=""><a href="">视频专题</a></li>
                                    </ul>
                                    <div className="pp-tab-c on">
                                        <div id="hotSpot">
                                            <a className="news-list" href="">
                                                <img className="lazyLoad" src={require('./20190429184835.png')} alt="热点资讯" width="315" height="194" /> </a>
                                            <div className="news-note cf">
                                                <p className="title ellipsis dynamic-title">
                                                    <a href="">
                                                        PPmoney网贷2018财报：全年营收4.97亿元 连续三年实现盈利
                                                    </a>
                                                </p>
                                                <div className="title-add" id="titleAdd">
                                                    4月29日，PPmoney网贷（万惠投资管理有限公司）公布平台2...
                                                </div>
                                                <ul>
                                                    <li className="hot-article">
                                                        <a href="" className="ellipsis dynamic-title">
                                                            PPmoney胡新：合规备案进程加快
                                                            头部平台积极提升综合实力
                                                        </a>
                                                    </li>
                                                    <li className="hot-article">
                                                        <a href="" className="ellipsis dynamic-title">
                                                            全面披露备案筹备进展
                                                            PPmoney高管私享会传递平台信心
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="news-more" href="">更多&gt;</a>
                                    </div>
                                </div>
                            </div>
                            <div className="cinfo-r">
                                <div className="hd">
                                    公司公告
                                    <a className="news-more" href="">
                                        更多&gt;
                                    </a>
                                </div>
                                <ul className="clist creport cf" id="announcement">
                                    <li className="cf">
                                        <a href="">
                                            <span className="announce-title ellipsis">PPmoney2019年劳动节放假安排通知</span>
                                            <span className="time">2019-04-26</span>
                                        </a>
                                    </li>
                                    <li className="cf">
                                        <a href="">
                                            <span className="announce-title ellipsis">
                                                关于工商信息更新【PPmoney实缴增至5亿】及平台项目调整的公告
                                            </span>
                                            <span className="time">2019-04-22</span>
                                        </a>
                                    </li>
                                    <li className="cf">
                                        <a href="">
                                            <span className="announce-title ellipsis">
                                                关于PPmoney网贷完成实缴注册资本5亿元的公告
                                            </span>
                                            <span className="time">2019-04-19</span>
                                        </a>
                                    </li>
                                    <li className="cf">
                                        <a href="">
                                            <span className="announce-title ellipsis">厦门银行资金存管系统停服公告</span>
                                            <span className="time">2019-04-17</span>
                                        </a>
                                    </li>
                                    <li className="cf">
                                        <a href="">
                                            <span className="announce-title ellipsis">
                                                PPmoney2019年清明节放假安排通知
                                            </span>
                                            <span className="time">2019-04-04</span>
                                        </a>
                                    </li>
                                    <li className="cf">
                                        <a href="">
                                            <span className="announce-title ellipsis">
                                                厦门银行存管和平台系统升级公告
                                            </span>
                                            <span className="time">2019-03-19</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="i-cate">
                                <span className="solid-v"></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 合作机构 */}
                <div className="i-mod-wrap" style={{ background: ' #f5f5f5' }}>
                    <div className="i-mod">
                        <div className="i-panel m-t20">
                            <div className="i-panel-head">
                                <div className="i-panel-tl">
                                    合作机构
                                </div>
                                <div class="i-panel-body cf">
                                    <div class="i-mod-coop m-t25">
                                        <div class="coop-list-bd" style={{ width: '1170px', height: '100px', overflow: 'hidden' }}>
                                            <ul id="coopList" class="coop-list" style={{ position: 'relative', left: '0px', width: '100%' }}>
                                                <li style={{ float: ' left', width: '1170px' }}>
                                                    <div class="coop-img">
                                                        <div class="coop-link">
                                                            <a class="coop-list" href="" title="厦门银行">
                                                                <img src={require('./442aabf6-f384-4c43-8394-e7b951dc0305.png')} alt="" />
                                                            </a>
                                                            <a class="coop-list" href="" title="同盾科技">
                                                                <img src={require('./442aabf6-f384-4c43-8394-e7b951dc0305.png')} alt="同盾科技" width="176" height="78" />
                                                            </a>
                                                            <a class="coop-list" href="" title="上上签">
                                                                <img src={require('./442aabf6-f384-4c43-8394-e7b951dc0305.png')} alt="上上签" width="176" height="78" />
                                                            </a>
                                                            <a class="coop-list" href="" title="法大大">
                                                                <img src={require('./442aabf6-f384-4c43-8394-e7b951dc0305.png')} alt="法大大" width="176" height="78" />
                                                            </a>
                                                            <a class="coop-list" href="" title="前海财险" >
                                                                <img src={require('./442aabf6-f384-4c43-8394-e7b951dc0305.png')} alt="前海财险" width="176" height="78" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Main