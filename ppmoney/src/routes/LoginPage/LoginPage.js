import React from 'react';
import styles from './LoginPage.css';
import { withRouter } from 'dva/router';

 class LoginPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
  }

  Registrationx =()=> {
    this.props.history.push('/registerHome')
    console.log(this)
  }

  render () {
    return (
        <div>
          <div className={styles.main}>
            <div className={styles.login_wrap}>

            <form className={styles.reg_form}>

                {/* 免费注册PPmoney账户 */}
                <div className={styles.register_hd}>
                  <div className={styles.img}></div>
                
                  <span className={styles.login_ms}>登录PPmoney <span onClick={this.Registrationx} className={styles.in}>免费注册</span></span>
                </div>


                <div className={styles.input_field}>
                  {/* 手机输入 */}
                  <div className={styles.phone}>
                    <span className={styles.icons}></span>
                    <input type="text" className={styles.tel} placeholder="手机号码" onBlur={this.onBlurs} />
                  </div>

                  {/* 密码 */}
                  <div className={styles.pwd}>
                    <span className={styles.icons}></span>
                    <input type="text" className={styles.tel} placeholder="登陆密码" />
                  </div>
                  <span className={styles.suggest}>忘记密码?</span>
             
                <div className={styles.sendRegister}>确认</div>
                </div>
              </form>
            </div>
          </div>
        </div>
    )
  }
}

LoginPage = withRouter(LoginPage)
export default LoginPage