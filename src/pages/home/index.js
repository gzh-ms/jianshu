import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as headerActionCreators } from '../../common/header/store';
import BackTop from '../../common/backTop';
import MeSlider from '../../common/slider';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTopWrapper
} from './style';

class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <MeSlider />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
        <Recommend />
        <Writer />
        </HomeRight>
        <BackTopWrapper>
          <BackTop />
        </BackTopWrapper>
      </HomeWrapper>
    );
  }

  componentDidMount() {
    const { getHomeData, getWriterList, writerPage, changeHeaderNavItemActive, articleList, writerList } = this.props;

    // 只发送一次ajax请求，获取到数据后保存在articleList
    articleList.size === 0 && getHomeData();
    writerList.size === 0 && getWriterList(writerPage);
    changeHeaderNavItemActive();
  }
}

const mapStateToProps = state => ({
  articleList: state.getIn(['homeReducer', 'articleList']),
  writerList: state.getIn(['homeReducer', 'writerList']),
  writerPage: state.getIn(['homeReducer', 'writerPage']),
});

const mapDispatchToProps = dispatch => ({
  // 获取首页内容
  getHomeData() {
    dispatch(actionCreators.getHomeData());
  },

  changeHeaderNavItemActive() {
    dispatch(headerActionCreators.changeItemActive('home'));
  },

  // 获取推荐作者
  getWriterList(writerPage) {
    dispatch(actionCreators.getWriterList(writerPage));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
