import { Component } from 'react';
import './LendRight.less'
import { Input, Select } from 'antd';
import { connect } from 'dva';

const InputGroup = Input.Group;
const Option = Select.Option;
// const LendRights = () => {

// };

// LendRights.propTypes = {
// };

// export default LoanFooter;
// export default connect((state) => {
//     return state
// })(LendRights)


//新加

class LendRights extends Component {
    constructor(props) {
        // 继承于父组件的props
        super(props)
        this.state = {}
    }



    render() {
        return (
            <div>
                <div className="tip2"><b>安心投服务</b></div>
                <div className="lenRigBanner"><img alt="" src={require('../../assets/LoanLmg/anxintou-banner.png')} /></div>
                <div className="com">
                    <div className="paper">
                        <div className="paperTit">
                            <span className="paperTit2">借款人信息</span>
                        </div>
                        <div className="textaaa">
                            <ul>
                                {
                                    this.props.borrower.tabBars.map((item) => {
                                        return <li className="fc" key={item.key}>
                                            <span style={{ display: 'block', float: 'left', marginRight: '10px', width: '50px', overflow: 'hidden' }}>{item.name}</span>
                                            <span style={{ display: 'block', float: 'left', marginRight: '10px', width: '120px', overflow: 'hidden' }}>{item.idcard}</span>
                                            <span style={{ width: '90px', display: 'block', float: 'left', marginRight: '10px', overflow: 'hidden' }}>{item.consumption}</span>
                                            <span style={{ display: 'block', float: 'left', marginRight: '10px', width: '90px', overflow: 'hidden' }}>{item.periods}</span>
                                            <span style={{ display: 'block', float: 'left', marginRight: '10px', width: '150px', overflow: 'hidden' }}>{item.money}</span>
                                        </li>


                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="serviceTo">
                        <div className="paperTit">
                            <span className="paperTit2">安心投服务介绍</span>
                        </div>
                        <p>
                            PPmoney全新推出的出借工具与服务，该服务运用先进的风控系统筛选优质资产，
                            人工智能配合大数据算法进行出借策略的优化与升级，用户一键出借，安心投为
                            用户进行更智能化的标的资产配置，全方位穿透真实资产，严格进行贷后监控，
                            使出借人更省心、更放心、更安心。
                        </p>
                    </div>
                </div>
                {/* 立即借出 */}
                <div className="com">
                    <div className="padd">
                        <div className="paperTit">
                            <span className="paperTit2">立即出借</span>
                            <b style={{ marginLeft: '10px' }}>出借人适当性管理告知<img alt="" src="https://ppmoneycnt.b0.upaiyun.com/static/v4.01/css/img/index/selfHelpInvest/icon1_b8649f0.png" /></b>
                        </div>
                        {/* 立即借出bottom */}
                        <div className="lendLeft">
                            <dl>
                                <dd>
                                    <span className="lendLeftInput">服务期限</span>
                                    <div className="xuanxian1">
                                        <InputGroup compact>
                                            <Select defaultValue="请选择" style={{ width: '186px' }}>
                                                <Option value="182天">182天</Option>
                                                <Option value="274天">274天</Option>
                                                <Option value="365天">365天</Option>
                                                <Option value="548天">548天</Option>
                                            </Select>
                                        </InputGroup>
                                    </div>
                                </dd>
                                <dd>
                                    <span className="lendLeftInput">出借金额</span>
                                    <div className="xuanxian1">
                                        <Input style={{ width: '186px' }} defaultValue="元" />
                                    </div>
                                </dd>
                            </dl>
                        </div>
                        <div className="lendRight">
                            <h3>当您使用安心投服务工具进行出借服务时，将授权PPmoney为您选择以下类型的标的进行循环出借：</h3>
                            <ul>
                                <li><img alt="" src="https://ppmoneycnt.b0.upaiyun.com/static/v4.01/css/img/index/selfHelpInvest/icon2_b47246a.png" />借款期限60个月以内</li>
                                <li><img alt="" src="https://ppmoneycnt.b0.upaiyun.com/static/v4.01/css/img/index/selfHelpInvest/icon2_b47246a.png" />债权明细合规披露</li>
                                <li><img alt="" src="https://ppmoneycnt.b0.upaiyun.com/static/v4.01/css/img/index/selfHelpInvest/icon2_b47246a.png" />额度合规，资产穿透</li>
                                <li><img alt="" src="https://ppmoneycnt.b0.upaiyun.com/static/v4.01/css/img/index/selfHelpInvest/icon2_b47246a.png" />多层风控，审核严谨</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 最后的 */}
                <div className="com">
                    <div className="lose">
                        <ul>
                            <div className="noList">
                                <h3>安心投服务工具说明</h3>
                                <p>当您选择指定服务期后，会展示对应的安心投服务，此时您可以查看服务详情或输入授权出借金额进行出借服务。</p>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}


export default connect((state) => {
    return state
})(LendRights)