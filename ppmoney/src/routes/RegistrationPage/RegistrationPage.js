import React from 'react';
import style from './RegistrationPage.css';
import { withRouter } from 'dva/router';
// var ReactDOM = require('react-dom');

class RegistrationPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      phone:""
     }
  }

  logins =()=> {
    this.props.history.push('/longinHome')
  }

  inputOnBlur = ()=>{
    this.setState({
      isShowCheckBox:false
    })
  }


  onBlurs =(e)=>{
    this.setState({
      phone: e.target.value
    },() => {
      // console.log(this.state.phone)//手机号

      let phoneval = this.state.phone;
      if(phoneval){
            var reg= /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
          if(reg.test(phoneval)){
            console.log('通过验证')
          }else{
            console.log('验证失败')
          }
        

      }else{
        // this.state.error1 = false;
        console.log('手机号输入有误！')
      }


    });
    
  }

  render () {
    return (
      <div>
      <main>
          <div className={style.contain}>
          
              <div className={style.reg_wrap}>
              
              <form className={style.reg_form}>

                {/* 免费注册PPmoney账户 */}
                <div className={style.register_hd}>
                  <div className={style.img}></div>
                  <p>免费注册PPmoney账户</p>
                  <span className={style.login_ms}>已有账户? <span className={style.in} onClick={this.logins}>登录</span></span>
                </div>


                <div className={style.input_field}>
                  {/* 手机输入 */}
                  <div className={style.phone}>
                    <span className={style.icons}></span>
                    <input type="text" className={style.tel} value={this.state.phone} placeholder="手机号码" onBlur={this.inputOnBlur } onChange={this.onBlurs.bind(this)} />
                    
                     <p className={style.pwd_grade}>手机号有误！</p>
                  </div>

                  {/* 密码 */}
                  <div className={style.pwd}>
                    <span className={style.icons}></span>
                    <input type="text" className={style.tel} placeholder="登陆密码" />
                  </div>
                  <span className={style.suggest}>建议密码由8位以上数字、字母和特殊字符组成。</span>
                  {/* <p className={style.pwd_grade}>密码长度须在8～20位之间</p> */}
                
                <div className={style.sendRegister} >确认</div>
                </div>
              </form>
              </div>
          </div>

          <div className={style.guarantee}></div>
          
      </main>
  </div>
    )
  }
}
RegistrationPage = withRouter(RegistrationPage)
export default RegistrationPage