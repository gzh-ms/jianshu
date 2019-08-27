import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

// immutable对象
const defaultState = fromJS({
  headerNavItemActive: 'home',
  mouseInMsg: false
});

export default (state = defaultState, action) => {

  switch (action.type) {
    case actionTypes.CHANGE_ITEM_ACTIVE: return state.set('headerNavItemActive', action.str);
    case actionTypes.SHOW_MESSAGE_DROPDOWN: return state.set('mouseInMsg', action.mouseInMsg);
    default: return state;
  } 
};
