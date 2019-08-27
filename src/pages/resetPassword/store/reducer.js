import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  resetPasswordBy: '',
  showUserTip: false,
  userFlag: false,
  userTipByMobile: '请输入正确的手机号码',
  userTipByEmail: '请输入正确的邮箱地址',
  sendCodeBtnStatus: 'disabled',
  showPasswordTip: false,
  passwordFlag: false,
  passwordTip: '密码不能少于6个字符',
  show_PasswordTip: false,
  _passwordFlag: false,
  _passwordTip: '密码不能少于6个字符',
  codeByHttp: null,
  showCodeTip: false,
  codeFlag: false,
  codeTip: '验证码有误，请重新输入'
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_RESET_PASSWORD_BY: return state.set('resetPasswordBy', action.str);
    case actionTypes.HIDE_TIP: return state.merge({
      showUserTip: false,
      showPasswordTip: false,
      show_PasswordTip: false,
      showCodeTip: false
    });
    case actionTypes.SHOW_USER_TIP: return state.merge({
      showUserTip: true,
      userFlag: false,
      sendCodeBtnStatus: 'disabled'
    });
    case actionTypes.SHOW_CODE_TIP: return state.merge({
      showCodeTip: true,
      codeFlag: false
    });
    case actionTypes.SHOW_PASSWORD_TIP: return state.merge({
      showPasswordTip: true,
      passwordFlag: false
    });
    case actionTypes.SHOW__PASSWORD_TIP: return state.merge({
      show_PasswordTip: true,
      _passwordFlag: false,
    });
    case actionTypes.CHANGE_USER_FLAG: return state.merge({
      userFlag: true,
      sendCodeBtnStatus: false
    });
    case actionTypes.CHANGE_CODE_FLAG: return state.set('codeFlag', true);
    case actionTypes.CHANGE_PASSWORD_FLAG: return state.set('passwordFlag', true);
    case actionTypes.CHANGE__PASSWORD_FLAG: return state.set('_passwordFlag', true);
    case actionTypes.GET_CODE: return state.set('codeByHttp', action.code).set('showCodeTip', false);
    default: return state;
  }
};
