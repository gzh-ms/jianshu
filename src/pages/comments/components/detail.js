import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Title,
  Content,
  FindNothing
} from '../style';
import imgSrc from '../../../static/find-nothing.png';
 
class Detail extends PureComponent {
  render() {
    const { info } = this.props;
    return (
      <Fragment>
        {this.getTitle()}
        {
          info.size !== 0 ? <Content></Content> : 
          <FindNothing>
            <img alt="img" src={imgSrc} />
            <p>这里还没有内容哦~</p>
          </FindNothing>
        }       
      </Fragment>
    );
  }

  // 获取标题
  getTitle() {
    switch (this.props.match.params.name) {
      case 'comments': return <Title>收到的评论</Title>;
      case 'messages': return <Title>全部简信</Title>;
      case 'likes': return <Title>收到的喜欢和赞</Title>;
      case 'requests': return <Title>全部投稿请求</Title>;
      case 'follows': return <Title>全部关注</Title>;
      case 'money': return <Title>赞赏和付费</Title>;
      case 'others': return <Title>其它提醒</Title>;
      default: return null;
    }
  }
}

const mapState = state => ({
  info: state.getIn(['commentsReducer', 'info'])
});

const mapDispatch = dispatch => ({

});
 
export default connect(mapState, mapDispatch)(withRouter(Detail));
 