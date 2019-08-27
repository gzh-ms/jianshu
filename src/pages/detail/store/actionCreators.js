import axios from "axios";
import  * as actionTypes from './actionTypes';

const changeDetail = data => ({
  type: actionTypes.CHANGE_DETAIL,
  data
});

export const getDetail = () => {
  return dispatch => {
    axios.get('/api/detail.json').then(res => {
      res.data.success && dispatch(changeDetail(res.data.data));
    }).catch(e => {
      console.log(e);
    });
  };
};

export const showShareList = () => ({
  type: actionTypes.SHOW_SHARE_LIST
});

export const hideShareList = () => ({
  type: actionTypes.HIDE_SHARE_LIST
});

export const showText = () => ({
  type: actionTypes.SHOW_TEXT
});

export const hideText = () => ({
  type: actionTypes.HIDE_TEXT
});

export const shareTo = () => ({
  type: actionTypes.SHARE_TO
});

export const closeShareTo = () => ({
  type: actionTypes.CLOSE_SHARE_TO
});

export const changeFollowStatus = (detailData, writerID, status) => {
  const newDetailData = detailData.toJS();
  newDetailData.forEach(item => {
    if (item.id === writerID) {
      item.status = status;
    }
  });

  return {
    type: actionTypes.CHANGE_FOLLOW_STATUS,
    detailData: newDetailData
  };
};
