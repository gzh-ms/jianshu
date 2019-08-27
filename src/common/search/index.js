import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import HotSearch from './components/hotSearch';
import {
  SearchWrapper,
  SearchToggle,
  Search
} from './style';
 
class MeSearch extends PureComponent {
  render() {
    const { focused, mouseInHotSearch, list, searchFocus, history, goToSearh, mouseEnterHotSearch, mouseLeaveHotSearch } = this.props;

    return (
      <SearchWrapper>
        <SearchToggle>
          <CSSTransition
            in={focused || mouseInHotSearch}
            timeout={300}
            classNames='slide'
          >
            <Search
              placeholder="搜索"
              className={focused || mouseInHotSearch ? 'focused' : ''}
              onClick={(e) => searchFocus(e, list)}
              ref={input => this.searchEl = input}
            />
          </CSSTransition>
          <i
            onClick={e => goToSearh(e, history)}
            className="iconfont fangdajing"
          >&#xe62b;</i>
        </SearchToggle>
        {/* 热门搜索 */}
        {
          focused || mouseInHotSearch ? 
          <div
            onMouseEnter={mouseEnterHotSearch}
            onMouseLeave={mouseLeaveHotSearch}
          >
            <HotSearch searchEl={this.searchEl} />
          </div> : null
        }
      </SearchWrapper>
    );
  }

  componentDidMount() {
    document.addEventListener('click', this.props.searchBlur);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.props.searchBlur);
  }
}

// props
const mapStateToProps = state => {
  return {
    focused: state.get('searchReducer').get('focused'),
    list: state.getIn(['searchReducer', 'list']),
    mouseInHotSearch: state.getIn(['searchReducer', 'mouseInHotSearch'])
  };
};

// methods
const mapDispatchToProps = dispatch => {
  return {
    // 搜索框聚焦
    searchFocus(e, list) {
      e.nativeEvent.stopImmediatePropagation();
      e.target.select();

      // list为immutable对象，size不为0时，数据已有，不发送ajax
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocusAction());
    },

    // 搜索框失焦
    searchBlur() { 
      dispatch(actionCreators.searchBlurAction());
    },

    // 鼠标进入热门搜索
    mouseEnterHotSearch() {  
      dispatch(actionCreators.mouseEnterHotSearch());
    },

    // 鼠标离开热门搜索
    mouseLeaveHotSearch() { 
      dispatch(actionCreators.mouseLeaveHotSearch());
    },

    // 去搜索页
    goToSearh(e, history, elem) {
      e.nativeEvent.stopImmediatePropagation();
      history.push('/search');
      
      // 点击热门搜索，文本显示在搜索框
      elem && (elem.value = e.target.innerText);

      dispatch(actionCreators.goToSearh());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MeSearch));
