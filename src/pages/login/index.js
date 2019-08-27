import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { actionCreators } from './store';
import {
  LoginWrapper,
  LoginContent,
  LoginHeader,
  LoginBody,
  InputWrapper,
  Input,
  VerifyCode,
  Loginfooter,
  OtherAccount,
  ProblemWrapper,
  PromblemItem,
  TipWrapper
} from './style';
import logoPic from '../../static/logo.png';
 
class Login extends PureComponent {
  render() {
    const { verifyCode, loginStatus, loginProblemFlag, handleLogin, checkVerifyCode, hideTip, handleLoginProblem, getVerifyCode } = this.props;
    if (!loginStatus) { 
      return (
        <LoginWrapper>
          <Link to="/"><img alt="logo" src={logoPic} className="logo-img" /></Link>
          <LoginContent>
            <LoginHeader>
              <span className="login active">登录</span>
              <span className="split">·</span>
              <Link to="/register"><span className="reg">注册</span></Link>
            </LoginHeader>
            <LoginBody>
              <InputWrapper>
                <i className="iconfont">&#xe640;</i>
                <Input placeholder="手机号或账号" className="user" ref={input => this.userEl = input}/>
              </InputWrapper>
              <InputWrapper>
                <i className="iconfont">&#xe60d;</i>
                <Input
                  placeholder="请输入右边的数字"
                  className="verify"
                  onBlur={() => checkVerifyCode(this, verifyCode)}
                  onClick={hideTip}
                  ref={input => this.verifyEl = input}
                />
                <VerifyCode onClick={getVerifyCode}>{verifyCode}</VerifyCode>
                {this.getVerifyTip()}
              </InputWrapper>
              <InputWrapper>
                <i className="iconfont lock">&#xe6e5;</i>
                <Input placeholder="密码" type="password" className="password" ref={input => this.passwordEl = input}/>                
              </InputWrapper>
              <div className="line">
                <input type="checkbox" value="true" className="remember" defaultChecked/><span>记住我</span>
                <span className="problem" onClick={e => handleLoginProblem(loginProblemFlag, e)}>登录遇到问题?</span>
                {this.loginProblem()}
              </div>
              <button className="button" onClick={() => handleLogin(this)}>登录</button>
            </LoginBody>
            <Loginfooter>
              <h6 className="title">社交账号登录</h6>
              <OtherAccount>
                <li className="item"><a target="_blank" rel="noopener noreferrer" href="https://open.weixin.qq.com/connect/qrconnect?appid=wxe9199d568fe57fdd&client_id=wxe9199d568fe57fdd&redirect_uri=http%3A%2F%2Fwww.jianshu.com%2Fusers%2Fauth%2Fwechat%2Fcallback&response_type=code&scope=snsapi_login&state=%257B%257D#wechat_redirect"><i className="iconfont weixin">&#xe66c;</i></a></li>
                <li className="item"><a target="_blank" rel="noopener noreferrer" href="https://api.weibo.com/oauth2/authorize?client_id=1881139527&redirect_uri=http%3A%2F%2Fwww.jianshu.com%2Fusers%2Fauth%2Fweibo%2Fcallback&response_type=code&state=%257B%257D"><i className="iconfont weibo">&#xe63d;</i></a></li>
                <li className="item"><a target="_blank" rel="noopener noreferrer" href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=100410602&redirect_uri=http%3A%2F%2Fwww.jianshu.com%2Fusers%2Fauth%2Fqq_connect%2Fcallback&response_type=code&state=%257B%257D"><i className="iconfont qq">&#xe612;</i></a></li>
                <li className="item"><a target="_blank" rel="noopener noreferrer" href="https://www.douban.com/service/auth2/auth?client_id=07b4f47aa74e2448171edd6ff5ea6cd8&redirect_uri=https%3A%2F%2Fwww.jianshu.com%2Fusers%2Fauth%2Fdouban%2Fcallback&response_type=code&state=%257B%257D"><i className="iconfont douban">&#xe7a1;</i></a></li>
              </OtherAccount>
            </Loginfooter>
          </LoginContent>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />
    }
  }

  // 登录遇到问题
  loginProblem() {
    if (this.props.loginProblemFlag) {
      return (
        <ProblemWrapper>
          <PromblemItem><Link to={`reset_password/mobile`}>用手机号重置密码</Link></PromblemItem>
          <PromblemItem><Link to={`reset_password/email`}>用邮箱重置密码</Link></PromblemItem>
          <PromblemItem><Link to={`reset_password/`}>无法用海外手机号登录</Link></PromblemItem>
          <PromblemItem><Link to={`reset_password/`}>无法用Google账号登录</Link></PromblemItem>
        </ProblemWrapper>
      );
    }    
  }

  // 验证码输入错误提示
  getVerifyTip() {
    const { showVerifyTip, verifyTip } = this.props;

    if (showVerifyTip) {
      return (
        <TipWrapper>{verifyTip}</TipWrapper>
      );
    }
  }

  componentDidMount() {
    const { verifyCode, handleLoginProblem, getVerifyCode } = this.props;

    document.addEventListener('click', handleLoginProblem);
    // 点击一次body。改loginProblemFlag为false
    document.body.click();

    verifyCode === '' && getVerifyCode();
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.props.handleLoginProblem);
  }
}

const mapState = state => ({
  loginStatus: state.getIn(['loginReducer', 'isLogin']),
  loginProblemFlag: state.getIn(['loginReducer', 'loginProblemFlag']),
  verifyCode: state.getIn(['loginReducer', 'verifyCode']),
  verifyFlag: state.getIn(['loginReducer', 'verifyFlag']),
  showVerifyTip: state.getIn(['loginReducer', 'showVerifyTip']),
  verifyTip: state.getIn(['loginReducer', 'verifyTip'])
});

const mapDispatch = dispatch => ({
  // 登录
  handleLogin(_this) {

    const { verifyFlag, verifyCode, checkVerifyCode } = _this.props;

    !verifyFlag && checkVerifyCode(_this, verifyCode);

    verifyFlag && dispatch(actionCreators.handleLogin(_this.userEl.value, _this.passwordEl.value));
  },

  // 登录遇到问题
  handleLoginProblem(loginProblemFlag, e) {
    // 阻止冒泡
    e !== undefined && e.nativeEvent.stopImmediatePropagation();

    // 点击document时
    if (loginProblemFlag === undefined) loginProblemFlag = true;

    dispatch(actionCreators.handleLoginProblem(loginProblemFlag));    
  },

  // 验证码
  getVerifyCode() {
    dispatch(actionCreators.getVerifyCode());
  },

  // 验证验证码输入是否一致
  checkVerifyCode(_this, verifyCode) {
    const verifyCodeByUser = _this.verifyEl.value;

    if (verifyCode === verifyCodeByUser) {
      dispatch(actionCreators.changeVerifyFlag());
    } else {
      dispatch(actionCreators.showVerifyTip());
    }
  },

  // 隐藏提示
  hideTip() {
    dispatch(actionCreators.hideTip());
  }
});
 
export default connect(mapState, mapDispatch)(Login);
