import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  showBackTop: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_BACK_TOP: return state.set('showBackTop', true);
    case actionTypes.HIDE_BACK_TOP: return state.set('showBackTop', false);
    default: return state;
  }
};
