import axios from 'axios';
import * as actionTypes from './actionTypes';

const _getWriterList = data => ({
  type: actionTypes.GET_WRITER_LIST,
  data
});

const _getFoloowStatus = data => ({
  type: actionTypes.GET_FOLLOW_STATUS,
  data
});

const _loadMoreWriter = writerList => ({
  type: actionTypes.LOAD_MORE_WRITER,
  writerList
});

export const getWriterList = () => {
  return dispatch => {
    axios.get('/api/writerList.json').then(res => {
      if (res.data.success) {
        dispatch(_getWriterList(res.data.data));
      }
    }).catch(err => {
      console.log(err);
    });
  };
};

export const getFollowStatus = () => {
  return dispatch => {
    axios.get('/api/follow.json').then(res => {
      if (res.data.success) {
        dispatch(_getFoloowStatus(res.data.data));
      }
    }).catch(err => {
      console.log(err);
    });
  };
};

export const changeFollowStatus = (followStatus, writerID, status) => {
  
  const newFollowStatus = followStatus.toJS();
  newFollowStatus.forEach(item => {
    if (item.writerID === writerID) {
      item.status = status;
      return false;
    }
  });

  return {
    type: actionTypes.CHANGE_FOLLOW_STATUS,
    followStatus: newFollowStatus
  };
};

export const loadMoreWriter = writerList => {
  return dispatch => {
    axios.get('/api/writerList.json').then(res => {
      if (res.data.success) {
        dispatch(_loadMoreWriter(writerList.toJS().concat(res.data.data)));
      }
    }).catch(err => {
      console.log(err);
    });
  };
};
