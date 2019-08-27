import * as actionTypes from './actionTypes';

export const setFollowStatus = status => ({
  type: actionTypes.SET_FOLLOW_STATUS,
  status
});

export const changeFollowStatus = status => ({
  type: actionTypes.CHANGE_FOLLOW_STATUS,
  status
});