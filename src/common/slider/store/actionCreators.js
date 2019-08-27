import * as actionTypes from './actionTypes';
import axios from 'axios';
import errorImg from '../../../static/error.png';
import { fromJS } from 'immutable';

const _getSliders = (sliders, totalPage) => ({
  type: actionTypes.GET_SLIDERS,
  sliders,
  totalPage
});

export const toNextPage = curPage => ({
  type: actionTypes.TO_NEXT_PAGE,
  curPage
});

export const toFirstPage = curPage => ({
  type: actionTypes.TO_FIRST_PAGE,
  curPage
});

export const toPrevPage = curPage => ({
  type: actionTypes.TO_PREV_PAGE,
  curPage
});

export const toLastPage = curPage => ({
  type: actionTypes.TO_LAST_PAGE,
  curPage
});

export const toIndexPage = curPage => ({
  type: actionTypes.TO_INDEX_PAGE,
  curPage
});

export const getSliders = () => {
  return dispatch => {
    axios.get('/api/slider.json', {
      timeout: 60000
    }).then(res => {
      if (res.data.success) { // 成功获取
        dispatch(_getSliders(fromJS(res.data.data), res.data.data.length));
        return;
      }

      throw Error('没有获取到数据');
    }).catch(e => { // 错误处理
      if (e) {
        const sliders = [{
          "id": 404,
          "imgSrc": errorImg
        }];
        dispatch(_getSliders(fromJS(sliders), 1));
      }
    });
  };
};
