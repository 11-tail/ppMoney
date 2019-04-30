import React from 'react';
import { connect } from 'dva';
import loancss from './LoanPage.css';
import LoanFooter from '../../components/LoanPage/LoanFooter'
import PPheade from '../../components/PPheade/PPhead'

function LoanPage() {
  return (
    <div>
      <div>
        {/* 头部 */}
        <PPheade />
      </div>

      {/* 我要借贷页面的main部分 */}
      <div>
        <div className={loancss.loanBanner}>
          {/* 背景图 */}
          <div>
            <img alt="" src="https://m-static.ppmoney.com/Content/Images/Upload/2019/20190307/1c8c6491-1ac6-4877-9186-a23574eb66af.jpg" className={loancss.bannerImg}></img>
          </div>

          {/* 遮罩小框 */}
          <div className={loancss.main}>
            <div className={loancss.register}>
              <h3 className={loancss.registerH3}>高效优质的信用借款就在你身边</h3>
              <p className={loancss.registerP}>资料简单，审核迅速</p>
              <div className={loancss.registerBtu}>马上拿钱</div>
            </div>
          </div>
        </div>

        {/* banner下面的借款介绍 */}
        <div className={loancss.Introduce}>
          <div className={loancss.Loancontainer}>
            {/* 1 */}
            <div className={loancss.IntroduceIcon}>
              <div className={loancss.IconChild1}><img alt="" src={require('../../assets/LoanLmg/icon_wyjk.png')} /></div>
              <div className={loancss.IconChild2}>
                <div className={loancss.title1}>无忧借款</div>
                <div className={loancss.title2}>
                  <p>纯线上操作</p>
                  <p>额度最高20万元</p>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className={loancss.IntroduceIcon}>
              <div className={loancss.IconChild1}><img alt="" src={require('../../assets/LoanLmg/icon_ksdz.png')} /></div>
              <div className={loancss.IconChild2}>
                <div className={loancss.title1}>快速到账</div>
                <div className={loancss.title2}>
                  <p>10秒授信</p>
                  <p>最快30分钟到账</p>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className={loancss.IntroduceIcon}>
              <div className={loancss.IconChild1}><img alt="" src={require('../../assets/LoanLmg/icon_sqbj.png')} /></div>
              <div className={loancss.IconChild2}>
                <div className={loancss.title1}>申请便捷</div>
                <div className={loancss.title2}>
                  <p>提供多种借款模式</p>
                  <p>满足不同的借款人群</p>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className={loancss.IntroduceIcon}>
              <div className={loancss.IconChild1}><img alt="" src={require('../../assets/LoanLmg/icon_lsdz.png')} /></div>
              <div className={loancss.IconChild2}>
                <div className={loancss.title1}>量身定制</div>
                <div className={loancss.title2}>
                  <p>轻松周转</p>
                  <p>可分3-36期</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* main2 */}
      <div className={loancss.main2}>
        <div className={loancss.Loancontainer}>
          <h3>您的借款选择</h3>
          {/* 图片 */}
          <div className={loancss.main2Img}>
            <img alt="" src={require('../../assets/LoanLmg/stages1.png')} className={loancss.main2Img1} />
            <img alt="" src={require('../../assets/LoanLmg/stages2.png')} className={loancss.main2Img1} />
            <img alt="" src={require('../../assets/LoanLmg/stages3.png')} className={loancss.main2Img1} />
            <img alt="" src={require('../../assets/LoanLmg/stages4.png')} className={loancss.main2Img1} />
          </div>
        </div>
      </div>

      {/* 常见问题 */}
      <div className={loancss.main3}>
        <div className={loancss.Loancontainer}>
          <h3>常见问题</h3>
          {/* 图片 */}
          <div className={loancss.main3Text}>
            <div className={loancss.main3Text1}>
              <h4>1、借款人需要具备什么条件？申请借款需要什么资料？</h4>
              <div className={loancss.main3Text2}>年龄在18-60周岁的中国大陆居民。需提供中国大陆居民身份证+有效手机号。PPmoney借款不向在校学生提供服务。。</div>
            </div>
            <div className={loancss.main3Text1}>
              <h4>2、借款需支付哪些费用？</h4>
              <div className={loancss.main3Text2}>费用包含利息、账户管理费、快速审批费、担保费等，实际收取情况以借款页面展示为准。</div>
            </div>
            <div className={loancss.main3Text1}>
              <h4>3、借款额度是多少？</h4>
              <div className={loancss.main3Text2}>不同借款产品额度范围有一定差别，具体额度为您授信审核后的信用额度。</div>
            </div>
            <div className={loancss.main3Text1}>
              <h4>4、逾期滞纳金是如何计算的？</h4>
              <div className={loancss.main3Text2}>在约定的还款日未还款，即为逾期，逾期需收取滞纳金，具体收取方式和费率请以借款合同为准。</div>
            </div>
          </div>
        </div>
      </div>
      {/* 底部 */}
      <div>
        <LoanFooter />
      </div>
    </div>
  );
}

LoanPage.propTypes = {
};

export default connect()(LoanPage);
