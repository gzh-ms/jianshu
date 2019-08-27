// 转immutabl对象
import { fromJS } from 'immutable';
// action-type
import * as actionTypes from './actionTypes';

// 默认数据
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  articlePage: 1,
  recommendList: [],
  writerList: [],
  writerPage: 0
});

export default (state = defaultState, action) => {
  switch (action.type) {
    // 加载文章， 热门专题， 推荐
    case actionTypes.CHANGE_HOME_DATA: return state.merge({
      articleList: fromJS(action.data.articleList),
      recommendList: fromJS(action.data.recommendList),
      topicList: fromJS(action.data.topicList)
    });
    // 加载更多文章
    case actionTypes.LOAD_MORE_HOME_ARTICLE: return state.merge({
      articleList: state.get('articleList').concat(fromJS(action.data)),
      articlePage: action.page
    });
    case actionTypes.GET_WRITER_LIST: return state.merge({
      writerList: fromJS(action.data)
    });
    case actionTypes.CHANGE_OTHER_WRITER: return state.merge({
      writerPage: action.writerPage
    });
    default: return state;
  }
};
