import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  showUserTip: false,
  userFlag: false,
  userEmptyTip: '请输入昵称',
  userWrongTip: '昵称格式不正确，需要是2-15个字符，只能包含英文中文下划线，不能包含空格。',
  showPhoneTip: false,
  phoneFlag: false,
  phoneEmptyTip: '请输入手机号',
  phoneWrongTip: '手机号格式不正确，需要是11位数字，不能包含空格。',
  sendCodeBtnStatus: 'disabled',
  showPasswordTip: false,
  passwordFlag: false,
  passwordEmptyTip: '请输入密码',
  passwordWrongTip: '密码需要是6-18个字符，只能包含英文大小写数字，不能包含空格。',
  codeByHttp: NaN,
  showCodeTip: false,
  codeFlag: false,
  codeWrongTip: '验证码有误，请重新输入'
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.HIDE_TIP: return state.merge({
      showUserTip: false,
      showPhoneTip: false,
      showPasswordTip: false,
      showCodeTip: false
    });
    case actionTypes.SHOW_PHONE_TIP: return state.merge({
      showPhoneTip: true,
      passwordFlag: false,
      sendCodeBtnStatus: 'disabled'
    });
    case actionTypes.CHANGE_PHONE_FLAG: return state.merge({
      phoneFlag: true,
      sendCodeBtnStatus: false
    });
    case actionTypes.SHOW_USER_TIP: return state.merge({
      showUserTip: true,
      userFlag: false
    });
    case actionTypes.SHOW_PASSWORD_TIP: return state.merge({
      showPasswordTip: true,
      passwordFlag: false
    });
    case actionTypes.SHOW_CODE_TIP: return state.merge({
      showCodeTip: true,
      codeFlag: false
    });
    case actionTypes.CHANGE_CODE_FLAG: return state.set('codeFlag', true);
    case actionTypes.CHANGE_USER_FLAG: return state.set('userFlag', true);
    case actionTypes.CHANGE_PASSWORD_FLAG: return state.set('passwordFlag', true);
    case actionTypes.GET_CODE: return state.set('codeByHttp', action.code);
    default: return state;
  }
};
