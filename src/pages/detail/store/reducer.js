import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  detailData: [],
  showShareList: false,
  showText: false,
  showShareTo: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DETAIL: return state.set('detailData', fromJS(action.data));
    case actionTypes.SHOW_SHARE_LIST: return state.set('showShareList', true);
    case actionTypes.HIDE_SHARE_LIST: return state.set('showShareList', false);
    case actionTypes.SHOW_TEXT: return state.set('showText', true);
    case actionTypes.HIDE_TEXT: return state.set('showText', false);
    case actionTypes.SHARE_TO: return state.set('showShareTo', true);
    case actionTypes.CLOSE_SHARE_TO: return state.set('showShareTo', false);
    case actionTypes.CHANGE_FOLLOW_STATUS: return state.set('detailData', fromJS(action.detailData));
    default: return state;
  }
};
