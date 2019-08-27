import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_FOLLOW_STATUS: return state.set('followStatus', action.status);
    case actionTypes.CHANGE_FOLLOW_STATUS: return state.set('followStatus', action.status);
    default: return state;
  }
};
