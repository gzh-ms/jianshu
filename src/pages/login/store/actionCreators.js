import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeLoginStatus = status => ({
  type: actionTypes.CHANGE_LOGIN_STATUS,
  status
});

const _getVerifyCode = verifyCode => ({
  type: actionTypes.GET_VERIFY_CODE,
  verifyCode
});

export const handleLogin = (user, password) => {
  return dispatch => {
    axios.get(`/api/login.json?user=${user}&password=${password}`).then(res => {
      if (res.data.login) {
        dispatch(changeLoginStatus(res.data.login));
      } else {
        alert('登录失败');
      }
    }).catch(err => {
      console.log(err);      
    });
  };
};

export const logout = () => ({
  type: actionTypes.HANDLE_LOGOUT
});

export const handleLoginProblem = loginProblemFlag => ({
  type:actionTypes.HANDEL_LOGIN_PROBLEM,
  loginProblemFlag: !loginProblemFlag
});

export const getVerifyCode = () => {
  return dispatch => {
    axios.get('/api/verifyCode.json').then(res => {     
      res.data.success && dispatch(_getVerifyCode(res.data.data[Math.floor(Math.random() * res.data.data.length)]));
    }).catch(e => {
      if (e) {
        dispatch(_getVerifyCode('9527'));
      }
    });
  };
};

export const changeVerifyFlag = () => ({
  type: actionTypes.CHANGE_VERIFY_FLAG
});

export const showVerifyTip = () => ({
  type: actionTypes.SHOW_VERIFY_TIP
});

export const hideTip = () => ({
  type: actionTypes.HIDE_TIP
});
