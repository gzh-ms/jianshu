import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  writerList: [],
  followStatus: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_WRITER_LIST: return state.set('writerList', fromJS(action.data));
    case actionTypes.GET_FOLLOW_STATUS: return state.set('followStatus', fromJS(action.data));
    case actionTypes.CHANGE_FOLLOW_STATUS: return state.set('followStatus', fromJS(action.followStatus));
    case actionTypes.LOAD_MORE_WRITER: return state.set('writerList', fromJS(action.writerList));
    default: return state;
  }
};
