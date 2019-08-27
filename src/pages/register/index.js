import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import {
  RegisterWrapper,
  RegisterContent,
  RegisterHeader,
  RegisterBody,
  FormWrapper,
  InputWrapper,
  Input,
  RegisterFooter,
  OtherAccount,
  TipWrapper
} from './style';
import logoPic from '../../static/logo.png';
 
class Register extends Component {
  render() {
    const { checkUser, hideTip, checkPhone, checkPassword, sendCodeBtnStatus, sendCode, checkCode, codeByHttp, formSubmit } = this.props;
    
    return (
      <RegisterWrapper>
        <Link to="/"><img alt="logo" src={logoPic} className="logo-img" /></Link>
        <RegisterContent>
          <RegisterHeader>
            <Link to="/login">
              <span className="login">登录</span>
            </Link>            
            <span className="split">·</span>
            <span className="reg active">注册</span>
          </RegisterHeader>
          <RegisterBody>
            <FormWrapper>
              <InputWrapper>
                <i className="iconfont">&#xe640;</i>
                <Input onBlur={e => checkUser(e)} onFocus={() => hideTip()} placeholder="你的昵称" type="text" className="user" ref={input => this.userEl = input} />
                {this.getUserTip(this.userEl)}
              </InputWrapper>
              <InputWrapper>
                <i className="iconfont">&#xe72f;</i>
                <Input onBlur={e => checkPhone(e, this.sendCodeBtn)} onFocus={() => hideTip()} placeholder="手机号" type="text" className="phone" ref={input => this.phoneEl = input} />
                {this.getPhoneTip(this.phoneEl)}
              </InputWrapper>
              <InputWrapper>
                <i className="iconfont">&#xe627;</i>
                <button onClick={() =>sendCode(this.btnEl)} className="sendCode" disabled={sendCodeBtnStatus} ref={btn => this.btnEl = btn}>发送验证码</button>
                <Input onFocus={() => hideTip()} onBlur={e => checkCode(e, codeByHttp)} placeholder="手机验证码" type="text" className="verificationCode" ref={input => this.codeEl = input} />
                {this.getCodeTip()}
              </InputWrapper>
              <InputWrapper>
                <i className="iconfont">&#xe6e5;</i>  
                <Input onBlur={e => checkPassword(e)} onFocus={() => hideTip()} placeholder="密码" type="password" className="password" ref={input => this.passwordEl = input} />
                {this.getPasswordTip(this.passwordEl)}
              </InputWrapper>
              <button className="button" onClick={e => formSubmit(this, e)}>注册</button>
            </FormWrapper>
          </RegisterBody>
          <RegisterFooter>
            <h6 className="title">社交帐号直接注册</h6>
            <OtherAccount>
              <li className="item"><a target="_blank" rel="noopener noreferrer" href="https://open.weixin.qq.com/connect/qrconnect?appid=wxe9199d568fe57fdd&client_id=wxe9199d568fe57fdd&redirect_uri=http%3A%2F%2Fwww.jianshu.com%2Fusers%2Fauth%2Fwechat%2Fcallback&response_type=code&scope=snsapi_login&state=%257B%257D#wechat_redirect"><i className="iconfont weixin">&#xe66c;</i></a></li>
              <li className="item"><a target="_blank" rel="noopener noreferrer" href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=100410602&redirect_uri=http%3A%2F%2Fwww.jianshu.com%2Fusers%2Fauth%2Fqq_connect%2Fcallback&response_type=code&state=%257B%257D"><i className="iconfont qq">&#xe612;</i></a></li>
            </OtherAccount>
          </RegisterFooter>
        </RegisterContent>
      </RegisterWrapper>
    );
  }

  // 用户名提示
  getUserTip(userEl) {
    const { showUserTip, userEmptyTip, userWrongTip } = this.props;

    if (showUserTip && userEl.value === '') {
      return (
        <TipWrapper>{userEmptyTip}</TipWrapper>
      );
    } else if (showUserTip) {
      return (
        <TipWrapper>{userWrongTip}</TipWrapper>
      );
    }
  }

  // 手机号提示
  getPhoneTip(phoneEl) {
    const { showPhoneTip, phoneEmptyTip, phoneWrongTip } = this.props;   

    if (showPhoneTip && phoneEl.value === '') {
      return (
        <TipWrapper>{phoneEmptyTip}</TipWrapper>
      );
    } else if (showPhoneTip) {
      return (
        <TipWrapper>{phoneWrongTip}</TipWrapper>
      );
    }
  }

  // 密码提示
  getPasswordTip(passwordEl) {
    const { showPasswordTip, passwordEmptyTip, passwordWrongTip } = this.props;   

    if (showPasswordTip && passwordEl.value === '') {
      return (
        <TipWrapper>{passwordEmptyTip}</TipWrapper>
      );
    } else if (showPasswordTip) {
      return (
        <TipWrapper>{passwordWrongTip}</TipWrapper>
      );
    }
  }

  // 验证码提示
  getCodeTip() {
    const { showCodeTip, codeWrongTip } = this.props;

    if (showCodeTip) {
      return <TipWrapper>{codeWrongTip}</TipWrapper>
    }
  }
}

const mapState = state => ({
  showUserTip: state.getIn(['registerReducer', 'showUserTip']),
  userEmptyTip: state.getIn(['registerReducer', 'userEmptyTip']),
  userWrongTip: state.getIn(['registerReducer', 'userWrongTip']),
  showPhoneTip: state.getIn(['registerReducer', 'showPhoneTip']),
  phoneEmptyTip: state.getIn(['registerReducer', 'phoneEmptyTip']),
  phoneWrongTip: state.getIn(['registerReducer', 'phoneWrongTip']),
  sendCodeBtnStatus: state.getIn(['registerReducer', 'sendCodeBtnStatus']),
  showPasswordTip: state.getIn(['registerReducer', 'showPasswordTip']),
  passwordEmptyTip: state.getIn(['registerReducer', 'passwordEmptyTip']),
  passwordWrongTip: state.getIn(['registerReducer', 'passwordWrongTip']),
  userFlag: state.getIn(['registerReducer', 'userFlag']),
  phoneFlag: state.getIn(['registerReducer', 'phoneFlag']),
  passwordFlag: state.getIn(['registerReducer', 'passwordFlag']),
  codeByHttp: state.getIn(['registerReducer', 'codeByHttp']),
  showCodeTip: state.getIn(['registerReducer', 'showCodeTip']),
  codeWrongTip: state.getIn(['registerReducer', 'codeWrongTip']),
  codeFlag: state.getIn(['registerReducer', 'codeFlag'])
});

const mapDispatch = dispatch => ({
  // 失焦，验证用户名
  checkUser(e) {
    const userName = e.target.value;
    const pattern = /^[\w\u4e00-\u9fa5]{2,15}$/;
    
    if (!pattern.test(userName)) {
      dispatch(actionCreators.showUserTip());
    } else {
      dispatch(actionCreators.changeUserFlag());
    }
  },

  // 聚焦, 全选，隐藏tip
  hideTip() {
    dispatch(actionCreators.hideTip());
  },

  // 失焦，验证手机号
  checkPhone(e) {
    const phoneNumber = e.target.value;
    const pattern = /^1[34578][1-9]\d{8}$/;

    if (!pattern.test(phoneNumber)) {
      dispatch(actionCreators.showPhoneTip());
    } else {
      dispatch(actionCreators.changePhoneFlag());
    }
  },

  // 失焦，验证密码
  checkPassword(e) {
    const password = e.target.value;
    const pattern = /^[a-zA-Z0-9]{6,18}$/;

    if (!pattern.test(password)) {
      dispatch(actionCreators.showPasswordTip());
    } else {
      dispatch(actionCreators.changePasswordFlag());
    }
  },

  // 发送验证码
  sendCode(elem) {
    dispatch(actionCreators.sendCode());

    // 倒计时
    let count = 60, timer;
    elem.disabled = true;
    timer = setInterval(() => {
      elem.innerHTML = count;

      if (count < 0) {
        clearInterval(timer);
        elem.disabled = false;
        elem.innerHTML = '发送验证码';
      }

      count--;
    }, 1000);
  },

  // 失焦， 验证验证码
  checkCode(e, codeByHttp) {
    const codeByUser = e.target.value;

    if (Number(codeByUser) !== codeByHttp) {
      dispatch(actionCreators.showCodeTip());
    } else {
      dispatch(actionCreators.changeCodeFlag());
    }
  },

  // 提交表单
  formSubmit(_this, e) {
    e.preventDefault();
    
    // 本地验证
    const { userFlag, phoneFlag, passwordFlag, codeFlag, history } = _this.props;

    !userFlag && dispatch(actionCreators.showUserTip());
    !phoneFlag && dispatch(actionCreators.showPhoneTip());
    !passwordFlag && dispatch(actionCreators.showPasswordTip());
    !codeFlag && dispatch(actionCreators.showCodeTip());   

    if (userFlag && phoneFlag && passwordFlag) {
      alert('注册成功！');

      history.push('/login');
    }
  }
});
 
export default connect(mapState, mapDispatch)(Register);
