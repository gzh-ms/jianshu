import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

// immutable对象
const defaultState = fromJS({
  focused: false, // 搜索框是否聚焦
  mouseInHotSearch: false, // 鼠标是否进入热门搜索
  list: [], // 热门搜索数据
  page: 1,  // 当前页
  totalPage: 1 // 总页数
});

export default (state = defaultState, action) => {

  switch (action.type) {
    case actionTypes.SEARCH_FOCUS: return state.set('focused', true);
    case actionTypes.SEARCH_BLUR: return state.set('focused', false);
    case actionTypes.CHANGE_LIST: return state.set('list', action.data).set('totalPage', action.totalPage);
    case actionTypes.MOUSE_ENTER_HOT_SEARCH: return state.set('mouseInHotSearch', true);
    case actionTypes.MOUSE_LEAVE_HOT_SEARCH: return state.set('mouseInHotSearch', false);
    case actionTypes.CHANGE_PAGE: return state.set('page', action.page);
    case actionTypes.GO_TO_SEARCH: return state.merge({
      focused: false,
      mouseInHotSearch: false
    });
    default: return state;
  }
  
};
