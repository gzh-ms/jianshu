import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import {
  ResetPasswordWrapper,
  ResetPasswordContent,
  ResetPasswordHeader,
  ResetPasswordBody,
  FormWrapper,
  InputWrapper,
  Input,
  ResetPasswordFooter,
  UserTip,
  PhoneTip,
  PasswordTip,
  CodeTip
} from './style';
import logoPic from '../../static/logo.png';
 
class ResetPassword extends PureComponent {
  render() {
    const { resetPasswordBy, hideTip, checkPassword, check_Password, formSubmit } = this.props;
    
    if (resetPasswordBy === '') return null;

    return (
      <ResetPasswordWrapper>
        <Link to="/"><img alt="logo" src={logoPic} className="logo-img" /></Link>
        <ResetPasswordContent>
          <ResetPasswordHeader>
            {resetPasswordBy === 'mobile' ? '用手机号重置密码' : '用邮箱重置密码'}
          </ResetPasswordHeader>
          <ResetPasswordBody>
            <FormWrapper>
              {this.getUser()}
              {this.getVerify()}
              <InputWrapper>
                <i className="iconfont">&#xe6e5;</i>  
                <Input onBlur={e => checkPassword(e)} onFocus={hideTip} placeholder="请输入新密码" type="password" className="password" ref={input => this.passwordEl = input} />
                {this.getPasswordTip()}
              </InputWrapper>
              <InputWrapper>
                <i className="iconfont">&#xe6e5;</i>  
                <Input onBlur={e => check_Password(e)} onFocus={hideTip} placeholder="请再输入一遍新密码" type="password" className="_password" ref={input => this._passwordEl = input} />
                {this.get_PasswordTip()}
              </InputWrapper>
              <button className="button" onClick={(e) =>formSubmit(this, e)}>重置密码</button>
            </FormWrapper>
          </ResetPasswordBody>
          <ResetPasswordFooter>
            <Link to="/login">
              <p>
                <i className="iconfont">&#xe616;</i>
                <span>返回登录注册</span>
              </p>
              </Link>
          </ResetPasswordFooter>
        </ResetPasswordContent>
      </ResetPasswordWrapper>
    );
  }

  componentDidMount() {
    const { match, setResetPasswordBy } = this.props;

    // 确定通过手机或邮箱重置密码
    setResetPasswordBy(match.params.name);
  }

  componentWillUnmount() {
    // 组件销毁时重置所有提示为隐藏
    this.props.hideTip();
  }

  // 获取用户名
  getUser() {
    const { checkUser, hideTip, resetPasswordBy } = this.props;
    
    return (
      <InputWrapper>
        {
          resetPasswordBy === 'mobile' ? <i className="iconfont">&#xe72f;</i> :
          <i className="iconfont">&#xe668;</i>
        }        
        <Input
          onBlur={e => checkUser(e, resetPasswordBy)}
          onFocus={hideTip}
          placeholder={resetPasswordBy === 'mobile' ? "请输入注册手机号": "请输入注册或绑定邮箱"}
          className="user"
          ref={input => this.userEl = input}
        />
        {this.getUserTip()}
      </InputWrapper>
    );
  }

  // 获取验证栏
  getVerify() {
    const { sendCodeBtnStatus, codeByHttp, hideTip, checkCode, sendCode, resetPasswordBy } = this.props;
    return (
      <InputWrapper>
        <i className="iconfont">&#xe627;</i>
        <button
          onClick={() =>sendCode(this.btnEl)}
          className="sendCode"
          disabled={sendCodeBtnStatus}
          ref={btn => this.btnEl = btn}
        >
          发送验证码
        </button>
        <Input
          onFocus={hideTip}
          onBlur={e => checkCode(e, codeByHttp)}
          placeholder={resetPasswordBy === 'mobile' ? "手机验证码（9527）": "邮箱验证码（9527）"}
          className="verificationCode"
          ref={input => this.codeEl = input}
        />
        {this.getCodeTip()}
      </InputWrapper>
    );
  }

  // 用户名提示
  getUserTip() {
    const { showUserTip, userTipByEmail, resetPasswordBy, userTipByMobile } = this.props;

    if (showUserTip && resetPasswordBy === 'email') {      
      return (
        <UserTip>{userTipByEmail}</UserTip>
      );
    } else if (showUserTip && resetPasswordBy === 'mobile'){
      return (
        <UserTip>{userTipByMobile}</UserTip>
      );
    } else {
      return null;
    }
  }

  // 手机号提示
  getPhoneTip(phoneEl) {
    const { showPhoneTip, phoneEmptyTip, phoneWrongTip } = this.props;   

    if (showPhoneTip && phoneEl.value === '') {
      return (
        <PhoneTip>{phoneEmptyTip}</PhoneTip>
      );
    } else if (showPhoneTip) {
      return (
        <PhoneTip>{phoneWrongTip}</PhoneTip>
      );
    }
  }

  // 密码提示
  getPasswordTip() {
    const { showPasswordTip, passwordTip } = this.props;   

    if (showPasswordTip) {
      return (
        <PasswordTip>{passwordTip}</PasswordTip>
      );
    }
  }

  // 密码确定提示
  get_PasswordTip() {
    const { show_PasswordTip, _passwordTip } = this.props;   

    if (show_PasswordTip) {
      return (
        <PasswordTip>{_passwordTip}</PasswordTip>
      );
    }
  }

  // 验证码提示
  getCodeTip() {
    const { showCodeTip, codeTip } = this.props;

    if (showCodeTip) {
      return <CodeTip>{codeTip}</CodeTip>
    }
  }
}

const mapState = state => ({
  resetPasswordBy: state.getIn(['resetPasswordReducer', 'resetPasswordBy']),
  showUserTip: state.getIn(['resetPasswordReducer', 'showUserTip']),
  userTipByMobile: state.getIn(['resetPasswordReducer', 'userTipByMobile']),
  userTipByEmail: state.getIn(['resetPasswordReducer', 'userTipByEmail']),
  sendCodeBtnStatus: state.getIn(['resetPasswordReducer', 'sendCodeBtnStatus']),
  showPasswordTip: state.getIn(['resetPasswordReducer', 'showPasswordTip']),
  passwordTip: state.getIn(['resetPasswordReducer', 'passwordTip']),
  show_PasswordTip: state.getIn(['resetPasswordReducer', 'show_PasswordTip']),
  _passwordTip: state.getIn(['resetPasswordReducer', '_passwordTip']),
  userFlag: state.getIn(['resetPasswordReducer', 'userFlag']),
  passwordFlag: state.getIn(['resetPasswordReducer', 'passwordFlag']),
  _passwordFlag: state.getIn(['resetPasswordReducer', '_passwordFlag']),
  codeByHttp: state.getIn(['resetPasswordReducer', 'codeByHttp']),
  showCodeTip: state.getIn(['resetPasswordReducer', 'showCodeTip']),
  codeTip: state.getIn(['resetPasswordReducer', 'codeTip']),
  codeFlag: state.getIn(['resetPasswordReducer', 'codeFlag'])
});

const mapDispatch = dispatch => ({
  // 通过手机或邮箱重置
  setResetPasswordBy(str) {
    dispatch(actionCreators.setResetPasswordBy(str));
  },

  // 失焦，验证用户名
  checkUser(e, resetPasswordBy) {
    const userName = e.target.value;
    const pattern = resetPasswordBy === 'mobile' ? /^1[3458]\d{9}$/ : /\s*@\w*\.\w*/;
    
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

  // 失焦，确认密码
  check_Password(e) {
    const _password = e.target.value;
    const pattern = /^[a-zA-Z0-9]{6,18}$/;

    if (!pattern.test(_password)) {
      dispatch(actionCreators.show_PasswordTip());
    } else {
      dispatch(actionCreators.change_PasswordFlag());
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
    // 阻止 form里button默认行为
    e.preventDefault();
    // 本地验证
    const { userFlag, _passwordFlag, passwordFlag, codeFlag, history } = _this.props;    

    !userFlag && dispatch(actionCreators.showUserTip());
    !passwordFlag && dispatch(actionCreators.showPasswordTip());
    !_passwordFlag && dispatch(actionCreators.show_PasswordTip());
    !codeFlag && dispatch(actionCreators.showCodeTip());

    if (userFlag && _passwordFlag && passwordFlag) {
      alert('修改成功');

      history.push('/login');
    }
  }
});
 
export default connect(mapState, mapDispatch)(ResetPassword);
