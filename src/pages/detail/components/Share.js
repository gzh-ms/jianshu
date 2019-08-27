import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
  ShareWrapper,
  ShareList,
  ShareItem
} from '../style';
 
class Share extends PureComponent {
  render() {
    const { showText, hideText, showShareList, isShowText, isShowShareList } = this.props;
    return (
      <Fragment>
        <ShareWrapper
          onClick={e => showShareList(e)}
          onMouseEnter={showText}
          onMouseLeave={hideText}
        >
          <i className="iconfont">&#xe614;</i>
          {isShowText && !isShowShareList ? <p className="text">分享文章</p> : null}
        </ShareWrapper>
        {this.getShareList()}
      </Fragment>
    );
  }

  // document上绑定事件
  componentDidMount() {
    document.addEventListener('click', this.props.hideShareList);
  }
  // 组件销毁清除事件处理程序
  componentWillUnmount() {
    document.removeEventListener('click', this.props.hideShareList);
  }

  // 获取分享列表
  getShareList() {
    const { isShowShareList, shareTo } = this.props;

    const data = [{
      "id": 1,
      "icon": "&#xe66c;",
      "className": "weixin",
      "name": "分享到微信"
    }, {
      "id": 2,
      "icon": "&#xe63d;",
      "className": "weibo",
      "name": "分享到微博"
    }, {
      "id": 3,
      "icon": "&#xe62e;",
      "className": "qqzone",
      "name": "分享到QQ空间"
    }, {
      "id": 4,
      "icon": "&#xe621;",
      "className": "twitter",
      "name": "分享到Twitter"
    }, {
      "id": 5,
      "icon": "&#xe604;",
      "className": "facebook",
      "name": "分享到Facebook"
    }, {
      "id": 6,
      "icon": "&#xe87a;",
      "className": "google",
      "name": "分享到Google+"
    }, {
      "id": 7,
      "icon": "&#xe7a1;",
      "className": "douban",
      "name": "分享到豆瓣"
    }];
    if (isShowShareList) {
      return (
        <ShareList>
          {data.map(item => (
            <ShareItem
              key={item.id}
              onClick={e => shareTo(e)}
            >
              <i className={`iconfont ${item.className}`} dangerouslySetInnerHTML={{__html: item.icon}}/>
              <p>{item.name}</p>
            </ShareItem>
          ))}
        </ShareList>
      );
    }
  }
}

const mapState = state => ({
  isShowShareList: state.getIn(['detailReducer', 'showShareList']),
  isShowText: state.getIn(['detailReducer', 'showText']),
  isShowShareTo: state.getIn(['detailReducer', 'showShareTo'])
});

const mapDispatch = dispatch => ({
  // 显示分享
  showShareList(e) {
    // 阻止document上的事件冒泡
    e.nativeEvent.stopImmediatePropagation();
    dispatch(actionCreators.showShareList());
  },

  // 点击其他隐藏分享
  hideShareList() {   
    dispatch(actionCreators.hideShareList());
  },

  // 鼠标移入分享 显示文字
  showText() {
    dispatch(actionCreators.showText());
  },

  // 鼠标移出分享 隐藏文字
  hideText() {
    dispatch(actionCreators.hideText());
  },

  // 显示分享链接
  shareTo(e) {
    // 阻止document上的事件冒泡
    e.nativeEvent.stopImmediatePropagation();
    dispatch(actionCreators.shareTo());
  }
});
 
export default connect(mapState, mapDispatch)(Share);
