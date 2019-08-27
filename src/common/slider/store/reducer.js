import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  sliders: [], // 幻灯片
  curPage: 1, // 当前页
  totalPage: 1, // 总页数
  pagination: true, // 分页器
  animation: true, // 过渡动画
  width: 625, // 幻灯片宽度
  speed: 500, // 过渡时间
  interval: 3000, // 自动轮播，0不开启
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.TO_NEXT_PAGE: return state.merge({
      curPage: action.curPage,
      animation: true
    });
    case actionTypes.TO_FIRST_PAGE: return state.merge({
      curPage: action.curPage,
      animation: false
    });
    case actionTypes.TO_PREV_PAGE: return state.merge({
      curPage: action.curPage,
      animation: true
    });
    case actionTypes.TO_LAST_PAGE: return state.merge({
      curPage: action.curPage,
      animation: false
    });
    case actionTypes.TO_INDEX_PAGE: return state.merge({
      curPage: action.curPage,
      animation: true
    });
    case actionTypes.GET_SLIDERS: return state.merge({
      sliders: action.sliders,
      totalPage: action.totalPage
    });
    default: return state;
  }
};
