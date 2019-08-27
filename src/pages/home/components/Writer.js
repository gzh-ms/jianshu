import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { actionCreators } from '../store';
import {
  WriterWrapper,
  WriterTitle,
  WriterSwitch,
  WriterList,
  WriterListItem,
  WriterName,
  WriterDetail,
  WriterMore
} from '../style';
 
class Writer extends PureComponent {
  render() {
    const { writerPage, changeOtherWriter } = this.props;

    return (
      <WriterWrapper>
        <WriterTitle>
          <span>推荐作者</span>
          <WriterSwitch onClick={() => changeOtherWriter(writerPage, this.iconEl)}>
            <i className="iconfont" ref={icon => this.iconEl = icon}>&#xe615;</i>
            <span className="text">换一批</span>
          </WriterSwitch>
        </WriterTitle>
        <WriterList>
          {this.getWriterInfo()}
        </WriterList>
        <WriterMore>
          <Link to='/writer'>
            查看全部<span>&gt;</span>
          </Link>
        </WriterMore>
      </WriterWrapper>
    );
  }

  getWriterInfo() {
    let { writerList, writerPage, handleFocus } = this.props;
    const newWriterList = writerList.toJS();
    const result = [];

    for(let i = writerPage * 5; i < (writerPage + 1) * 5; i++) {
      if (i >= 10) {
        return <WriterListItem>没有更多数据了</WriterListItem>;
      } else {
        if (newWriterList[i] === undefined) return;

        result.push(
          <WriterListItem key={newWriterList[i].id}>
            <Link className="writer-link" to={`/user/${newWriterList[i].id}`}>
              <img alt="pic" className="writer-img" src={newWriterList[i].imgSrc} />
            </Link>
            <div className="writer-info">
              <WriterName>
                <Link className="writer-name"  to={`/user/${newWriterList[i].id}`}>{newWriterList[i].name}</Link>
                <span className="focus" onClick={() => handleFocus(this.props)}>+加关注</span>
              </WriterName>
              <WriterDetail>
                {newWriterList[i].detail}
              </WriterDetail>
            </div>
          </WriterListItem>
        );
      }     
    }

    return result;
  }
}

const mapStateToProps = state => ({
  writerList: state.getIn(['homeReducer', 'writerList']),
  writerPage: state.getIn(['homeReducer', 'writerPage']),
  isLogin: state.getIn(['loginReducer', 'isLogin'])
});

const matDispatch = dispatch => ({
  // 点击关注
  handleFocus(props) {
    const { isLogin, history } = props;

    if (!isLogin) {
      history.push('/login');
    } else {
      history.push('/user');
    }    
  },

  // 换一批
  changeOtherWriter(writerPage, iconEl) {    
    const rotateDeg = +iconEl.style.transform.replace(/[^\d]/ig, '');
    iconEl.style.transform = `rotate(${rotateDeg + 360}deg)`;

    dispatch(actionCreators.changeOtherWriter(++writerPage));
  }
});

export default connect(mapStateToProps, matDispatch)(withRouter(Writer));
 