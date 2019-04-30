import React from 'react';
import { connect } from 'dva';
import style from './LoginToRegister.css';

function LoginToRegister() {
  return (
    <div>
       <footer>
           <div className={ style.copyright }>
            <div className={style.copyright_top}>
            <ul>
              <li>关于我们</li>
              <li>人才招聘</li>
              <li>法律申明</li>
              <li>意见反馈</li>
              <li>联系我们</li>
              <li>新手必读</li>
            </ul>
            </div>

            <p className={style.agency_box}>
            <span>版权所有&copy;</span>
            <span>PPmoney.com</span>
            <span>粤ICP备 12030634号</span>
            <span>增值电信业务经营许可证：粤B1.B2-20150286</span>
            <span>版权所有</span>
            </p>
            <p className={style.agency_box}>
              <span>信息系统安全等级保护备案证明(三级)</span>
              <span><span className={style.beian}></span>粤公网安备 44010602001800号</span>
            </p>
           </div>
       </footer>
    </div>
  );
}

LoginToRegister.propTypes = {
};

export default connect()(LoginToRegister);
