import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';
import { actionCreators as headerActionCreators } from '../../common/header/store';
import {
  DetailWrapper,
  DetailTitle,
  DetailContent,
  WriterDesc,
  WriterName,
  WriterInfo,
  Addition,
  ShareToContainer
} from './style';
import BackTop from '../../common/backTop';
import Share from './components/Share';
import ShareTo from './components/ShareTo';
import FollowButton from '../../common/followButton';

 
class Detail extends PureComponent {
  render() {
    const { title, content, imgSrc, writer, desc, status, id } = this.getDetailById();

    return (
      <DetailWrapper>
        <DetailTitle>{title}</DetailTitle>
        <WriterDesc>
          <img src={imgSrc} alt="img" className="writer-img"/>
          <div className="writer-desc">
            <WriterName>
              <span className="name">{writer}</span>
              <div className="follow">
                <FollowButton status={status} writerID={id} fromDetail={true} />
              </div>
            </WriterName>
            <WriterInfo>{desc}</WriterInfo>
          </div>
        </WriterDesc>
        <DetailContent dangerouslySetInnerHTML={{__html: content}} />
        <Addition>
          <div className="backtop-wrapper"><BackTop /></div>
          <Share />
        </Addition>
        <ShareToContainer>
          <ShareTo />
        </ShareToContainer>
      </DetailWrapper>
    );
  }

  componentDidMount() {
    const { data, getDetail, changeHeaderNavItemActive } = this.props;

    BackTop.BackToTop(0); // 每次进入都回到顶部

    // 只发送一次ajax请求，获取到数据后保存在data
    data.size === 0 && getDetail();
    changeHeaderNavItemActive();
  }

  // 根据路由传过来的ID获取内容
  getDetailById() {
    const { data, match } = this.props;
    const newDetail = data.filter(item => item.get('id') === Number(match.params.id)).toJS()[0] || {};

    return newDetail;
  }
}

const mapState = state => ({
  data: state.getIn(['detailReducer', 'detailData'])
});

const mapDispatch = dispatch => ({
  // 获取内容
  getDetail() {
    dispatch(actionCreators.getDetail());
  },

  changeHeaderNavItemActive() {
    dispatch(headerActionCreators.changeItemActive('detail'));
  }
});
 
export default connect(mapState, mapDispatch)(withRouter(Detail));
 