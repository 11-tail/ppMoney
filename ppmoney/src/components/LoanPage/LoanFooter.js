import React from 'react';
import './LoanFooter.less'
const LoanFooter = () => {
  return (
    <div className="without">
        <div className="Loancontainer">
            <div>版权所有 (C) PPmoney.com 
                <a href="http://www.miibeian.gov.cn/"> 粤ICP备 12030634号</a>&nbsp;&nbsp;
                <a href="https://www.ppmoney.com/special/edi/edi.html">增值电信业务经营许可证：粤B2-20150286</a></div>
            <div>
                <a href="https://www.ppmoney.com/special/safe/safe.html">信息系统安全等级保护备案证明(三级)</a>
                <img alt="" src={require('../../assets/LoanLmg/PPmoney-beian.png')} />粤公网安备 44010602001800号
            </div>
        </div>
    </div>
  );
};

LoanFooter.propTypes = {
};

export default LoanFooter;
