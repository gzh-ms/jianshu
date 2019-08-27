import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

// 数据格式统一为immutable对象。axios返回的是js数组，fromJS转成immutable对象
const changeListAction = data => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const searchFocusAction = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const searchBlurAction = () => ({
  type: actionTypes.SEARCH_BLUR
});

export const getList = () => {
  return dispatch => {
    // 请求地址为public目录下的假数据
    axios.get('/api/hotSearchList.json').then(res => {
      if (res.data.success) {
        dispatch(changeListAction(res.data.data));
      }
    }).catch(err => {
      console.log(err);
    });
  };
};

export const mouseEnterHotSearch = () => ({
  type: actionTypes.MOUSE_ENTER_HOT_SEARCH
});

export const mouseLeaveHotSearch = () => ({
  type: actionTypes.MOUSE_LEAVE_HOT_SEARCH
});

export const goToSearh = () => ({
  type: actionTypes.GO_TO_SEARCH
});

export const changePageAction = page => ({
  type: actionTypes.CHANGE_PAGE,
  page
});
