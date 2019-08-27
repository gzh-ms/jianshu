import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as searchReducer } from '../common/search/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as backTopReducer } from '../common/backTop/store';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as loginReducer } from '../pages/login/store';
import { reducer as registerReducer } from '../pages/register/store';
import { reducer as resetPasswordReducer } from '../pages/resetPassword/store';
import { reducer as sliderReducer } from '../common/slider/store';
import { reducer as writerReducer } from '../pages/writer/store';
import { reducer as commentsReducer } from '../pages/comments/store';
import { reducer as followReducer } from '../pages/follow/store';
import { reducer as followBtnReducer } from '../common/followButton/store';

// 从redux-immutable引入的combineReducers函数返回的是immutable对象
export default combineReducers({
  headerReducer,
  searchReducer,
  homeReducer,
  backTopReducer,
  detailReducer,
  loginReducer,
  registerReducer,
  sliderReducer,
  resetPasswordReducer,
  writerReducer,
  commentsReducer,
  followReducer,
  followBtnReducer
});
