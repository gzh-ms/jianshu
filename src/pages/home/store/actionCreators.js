import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeHomeData = data => ({
  type: actionTypes.CHANGE_HOME_DATA,
  data
});

const loadMoreHomeArticle = (data, page) => ({
  type: actionTypes.LOAD_MORE_HOME_ARTICLE,
  data,
  page
});

const _getWriterList = data => ({
  type: actionTypes.GET_WRITER_LIST,
  data,
});

export const getHomeData = () => {
  return dispatch => {
    axios.get('/api/homeData.json').then(res => {
      res.data.success && dispatch(changeHomeData(res.data.data));
    }).catch(e => {
      console.log(e);
    });
  };
};

export const loadMoreArticle = page => {
  return dispatch => {
    axios.get('/api/homeArticleList.json?page=' + page).then(res => {
      res.data.success && dispatch(loadMoreHomeArticle(res.data.data, ++page));
    }).catch(err => {
      console.log(err);
    });
  };
};

export const getWriterList = writerPage => {
  return dispatch => {
    axios.get(`/api/writer.json?page=${writerPage}`).then(res => {
      if (res.data.success) {
        return dispatch(_getWriterList(res.data.data));
      }

      throw Error('没有获取到数据');
    }).catch(err => {
      console.log(err);      
    });
  };
};

export const changeOtherWriter = writerPage => ({
  type: actionTypes.CHANGE_OTHER_WRITER,
  writerPage
});
