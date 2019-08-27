import axios from 'axios';
import * as actionTypes from './actionTypes';

const getCode = code => ({
  type: actionTypes.GET_CODE,
  code
});

export const hideTip = () => ({
  type: actionTypes.HIDE_TIP
});

export const showUserTip = () => ({
  type: actionTypes.SHOW_USER_TIP
});

export const showPhoneTip = () => ({
  type: actionTypes.SHOW_PHONE_TIP
});

export const changeUserFlag = () => ({
  type: actionTypes.CHANGE_USER_FLAG
});

export const changePhoneFlag = () => ({
  type: actionTypes.CHANGE_PHONE_FLAG
});

export const showPasswordTip = () => ({
  type: actionTypes.SHOW_PASSWORD_TIP
});

export const changePasswordFlag = () => ({
  type: actionTypes.CHANGE_PASSWORD_FLAG
});

export const sendCode = () => {
  return dispatch => {
    axios.get('/api/verification-code.json').then(res => {
      if (res.data.success) {
        dispatch(getCode(res.data.code));
      }
    }).catch(err => {
      console.log(err);
    });
  };
};

export const showCodeTip = () => ({
  type: actionTypes.SHOW_CODE_TIP
});

export const changeCodeFlag = () => ({
  type: actionTypes.CHANGE_CODE_FLAG
});
