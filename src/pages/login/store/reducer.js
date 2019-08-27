import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  isLogin: false,
  loginProblemFlag: false,
  verifyFlag: false,
  showVerifyTip: false,
  verifyTip: '验证码有误，请重新输入',
  verifyCode: ''
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN_STATUS: return state.set('isLogin', action.status);
    case actionTypes.HANDLE_LOGOUT: return state.set('isLogin', false);
    case actionTypes.HANDEL_LOGIN_PROBLEM: return state.set('loginProblemFlag', action.loginProblemFlag);
    case actionTypes.GET_VERIFY_CODE: return state.set('verifyCode', action.verifyCode);
    case actionTypes.CHANGE_VERIFY_FLAG: return state.set('verifyFlag', true);
    case actionTypes.SHOW_VERIFY_TIP: return state.merge({
      verifyFlag: false,
      showVerifyTip: true
    });
    case actionTypes.HIDE_TIP: return state.merge({
      showVerifyTip: false
    });
    default: return state;
  }
};
