import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from '../store';
import {
  SearchLayer,
  ListItem
} from '../style';
 
class HotSearch extends PureComponent {
  render() {
    const { list, searchEl, page, totalPage, changePage, goToSearh, history } = this.props;
  
    // 热门搜索没有内容时
    if (list.size === 0) return null;

    const newList = list.toJS(); // immutable对象转成js数组
    const pageItems = [];

    // 热门搜索条目
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      newList[i] !== undefined && pageItems.push(<ListItem key={newList[i]} onClick={e => goToSearh(e, history, searchEl)}>{newList[i]}</ListItem>)    
    }
    
    return (
      <SearchLayer>
        <h4 className="title">
          热门搜索
          <span
            className="change"
            onClick={() => changePage(page, totalPage, this.rotateIcon)}
          >
            换一批
          </span>
          <i
            className="iconfont xuanzhuan"
            ref={icon => this.rotateIcon = icon}
          >&#xe615;</i>
        </h4>
        <ul className="clearfix">
          {pageItems}
        </ul>
      </SearchLayer>
    );
  }
}

const mapState = state => ({
  list: state.getIn(['searchReducer', 'list']),
  page: state.getIn(['searchReducer', 'page']),
  totalPage: state.getIn(['searchReducer', 'totalPage'])
});

const mapDispatch = dispatch => ({
  // 换一批
  changePage(page, totalPage, iconEl) {
    const rotateDeg = +iconEl.style.transform.replace(/[^0-9]/ig, '');
    // 旋转小图标, 需变成块级元素才生效
    iconEl.style.transform = `rotate(${rotateDeg + 360}deg)`;

    if (page < totalPage) { // 下一页
      dispatch(actionCreators.changePageAction(++page));
    } else { // 回到第一页
      dispatch(actionCreators.changePageAction(1));
    }

  },

  // 去搜索页
  goToSearh(e, history, elem) {
    e.nativeEvent.stopImmediatePropagation();
    history.push('/search');
    
    // 点击热门搜索，文本显示在搜索框
    elem && (elem.value = e.target.innerText);

    dispatch(actionCreators.goToSearh());
  }
});
 
export default connect(mapState, mapDispatch)(withRouter(HotSearch));
 