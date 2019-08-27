import * as actionTypes from './actionTypes';

export const changeItemActive = str => ({
  type: actionTypes.CHANGE_ITEM_ACTIVE,
  str
});

export const showMessageDropdown = mouseInMsg => ({
  type: actionTypes.SHOW_MESSAGE_DROPDOWN,
  mouseInMsg
});
