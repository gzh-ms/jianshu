import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';
import { actionCreators as writerActionCreators } from '../../pages/writer/store';
import { actionCreators as detailActionCreators } from '../../pages/detail/store';
 
class FollowButton extends PureComponent {
  render() {
    const { handleFollow, status } = this.props;

    return (
      <div
        onClick={() => handleFollow(this.props)}
        className={status !== '关注' ? 'followed' : ''}
      >{status}</div>
    );
  }
}

const mapState = state => ({
  isLogin: state.getIn(['loginReducer', 'isLogin']),
  followStatus: state.getIn(['writerReducer', 'followStatus']),
  detailData: state.getIn(['detailReducer', 'detailData'])
});

const mapDispatch = dispatch => ({
  handleFollow(props) {
    const { isLogin, history, followStatus, detailData, writerID, status, fromWriter, fromDetail  } = props;

    if (isLogin) {
      if (fromDetail) {
        switch (status) {
          case '关注': dispatch(detailActionCreators.changeFollowStatus(detailData, writerID, '已关注'));
          break;
          case '已关注': dispatch(detailActionCreators.changeFollowStatus(detailData, writerID, '关注'));
          break;
          default: return null;
        }

      } else if (fromWriter) {

        switch (status) {
          case '关注': dispatch(writerActionCreators.changeFollowStatus(followStatus, writerID, '已关注'));
          break;
          case '已关注': dispatch(writerActionCreators.changeFollowStatus(followStatus, writerID, '关注'));
          break;
          default: return null;
        }
      }
    } else {
      history.push('/login');
    }
  },

  setFollowStatus(status) {
    dispatch(actionCreators.setFollowStatus(status));
  }
});
 
export default connect(mapState, mapDispatch)(withRouter(FollowButton));
 