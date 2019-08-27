import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MeBackTop from '../../common/backTop';
import FollowButton from '../../common/followButton';
import { actionCreators } from './store';
import { actionCreators as headerActionCreators } from '../../common/header/store';
import { 
  WriterWrapper,
  WriterHeader,
  WriterList,
  WriterItem,
  WriterInfo,
  WriterName,
  WriterDesc,
  FollowBtnWrapper,
  Split,
  RecentUpdate,
  LoadMore,
  BackTopWrapper
} from './style';
import writerBgPic from '../../static/writer-bg.png';
 
class Writer extends PureComponent {
  render() {
    const { writerList, loadMoreWriter } = this.props;
    return (
      <Fragment>
        <WriterWrapper>
          <WriterHeader>
            <img src={writerBgPic} alt='img' className="writerImg" />
          </WriterHeader>
          {this.getWriterList()}
          <LoadMore onClick={() => loadMoreWriter(writerList)}>加载更多</LoadMore>
        </WriterWrapper>
        <BackTopWrapper>
          <MeBackTop />
        </BackTopWrapper>
      </Fragment>
    );
  }

  getWriterList() {
    const { writerList, followStatus } = this.props;

    if (writerList.size !== 0 && followStatus.size !== 0) {
      return (
        <WriterList>
          {writerList.map((item, index) => {
            const writerID = item.get('writerID');
            let status;

            followStatus.forEach(_item => {
              if (_item.get('writerID') === writerID) {
                status = _item.get('status');
                return false;
              }
            });
            
            return (
              <WriterItem key={index}>
                <WriterInfo>
                  <Link to="/user">   
                    <img className="writerPic" alt="img" src={item.get('imgSrc')} />
                    <WriterName>{item.get('name')}</WriterName>
                    <WriterDesc>{item.get('desc')}</WriterDesc>
                  </Link>
                  <FollowBtnWrapper>
                    <FollowButton status={status} writerID={writerID} fromWriter={true} />
                  </FollowBtnWrapper>
                  <hr />
                  <Split>最近更新</Split>
                  {this.getRecentUpdate(item.get('recentUpdate'))}
                </WriterInfo>
              </WriterItem>     
            );
          })}       
        </WriterList>
      );
    }
  }

  getRecentUpdate(data) {
    return data.map(item => (
      <RecentUpdate key={item.get('articleID')}>
        <Link to={`/detail/${item.get('articleID')}`} className="link">{item.get('articleDesc')}</Link>
      </RecentUpdate>
    ));
  }

  componentDidMount() {
    const { writerList, followStatus, changeHeaderNavItemActive, getWriterList, getFollowStatus } = this.props;

    writerList.size === 0 && getWriterList();
    followStatus.size === 0 && getFollowStatus();

    changeHeaderNavItemActive();
  }
}

const mapState = state => ({
  writerList: state.getIn(['writerReducer', 'writerList']),
  isLogin: state.getIn(['loginReducer', 'isLogin']),
  followStatus: state.getIn(['writerReducer', 'followStatus'])
});

const mapDispatch = dispatch => ({
  // 作者
  getWriterList() {
    dispatch(actionCreators.getWriterList());
  },

  // 获取关注信息
  getFollowStatus() {
    dispatch(actionCreators.getFollowStatus());
  },

  // 加载更多
  loadMoreWriter(writerList) {
    dispatch(actionCreators.loadMoreWriter(writerList));
  },

  // 改变头部当前选中
  changeHeaderNavItemActive() {
    dispatch(headerActionCreators.changeItemActive('writer'));
  }
});
 
export default connect(mapState, mapDispatch)(Writer);
 