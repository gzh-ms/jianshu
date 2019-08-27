import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import shareToPic from '../../../static/shareTo.png';
import {
  ShareToWrapper,
  ShareToContent,
  CloseShareTo
} from '../style';


// 分享到
class ShareTo extends PureComponent {
  render() {
    return (
      <Fragment>{this.getShareTo()}</Fragment>
    );
  }

  // 显示分享链接
  getShareTo() {
    const { isShowShareTo, closeShareTo } = this.props;
    if (isShowShareTo) {
      return (
        <ShareToWrapper>
          <ShareToContent>
            <CloseShareTo onClick={closeShareTo}>X</CloseShareTo>
            <p className="title">打开APP"扫一扫"，打开网页后点击屏幕右上角分享按钮</p>
            <img alt="img" src={shareToPic} className="share-to-img" />
          </ShareToContent>
        </ShareToWrapper>
      );
    }
  }
}

const mapState = state => ({
  isShowShareTo: state.getIn(['detailReducer', 'showShareTo'])
});

const mapDispatch = dispatch => ({
  // 关闭分享链接
  closeShareTo() {
    dispatch(actionCreators.closeShareTo());
  }
});

export default connect(mapState, mapDispatch)(ShareTo);
 