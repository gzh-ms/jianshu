import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import {
  SliderWrapper,
  SliderContainer,
  Slide,
  PaginationWrapper,
  PrevBtn,
  NextBtn
} from './style';

class MeSlider extends PureComponent {
  // 定时器ID
  static $timer = null;

  render() {
    const { toNextPage, toPrevPage, interval } = this.props;

    return (
      <SliderWrapper
        onMouseEnter={() => {
         MeSlider.$timer && clearInterval(MeSlider.$timer);
        }}
        onMouseLeave={() => {
          if (interval === 0) return;
          MeSlider.$timer = setInterval(() => {
            toNextPage(this.props);
          }, interval);
        }}
      >
        {this.createSlider()}
        <PrevBtn onClick={() => toPrevPage(this.props)}><i className="iconfont">&#xe631;</i></PrevBtn>
        <NextBtn onClick={() => toNextPage(this.props)}><i className="iconfont">&#xe631;</i></NextBtn>
        {this.getPagination()}
      </SliderWrapper>
    );
  }

  // 幻灯片
  createSlider() {
    const { sliders, curPage, width, animation, speed } = this.props;

    if (sliders.size === 0) return; // componentDidMount前渲染无数据。

    const newSliders = sliders.toJS();

    // 首尾各加一项
    const firstSlider = newSliders[0];
    newSliders.unshift(newSliders[newSliders.length - 1]);
    newSliders.push(firstSlider);

    // 移动距离，过渡时间
    const distance = -curPage * width + 'px';   
    const transition = animation ? `all ${speed / 1000}s` : '';

    return (
      <SliderContainer style={{left: distance, transition: transition}}>       
        {newSliders.map((item, index) => (
          <Slide key={index}>
            <Link to={`/detail/${item.id}`}>
              <img className="slide-img" alt="img" src={item.imgSrc} />
            </Link>
          </Slide>
        ))}
      </SliderContainer>
    );
  }

  // 分页器
  getPagination() {
    const { sliders, curPage, totalPage, pagination, toIndexPage } = this.props;
    const _curPage = curPage > totalPage ? 1 : (curPage < 1 ? totalPage : curPage);   

    if (pagination) {
      return (
        <PaginationWrapper>
          {sliders.map((_, index) => (
            <div
              className={_curPage === index + 1 ? 'line active' : 'line'}
              key={index}
              onClick={() => toIndexPage(index + 1)}
            >
              <span></span>
            </div>
          ))}
        </PaginationWrapper>
      );
    }
  }

  // 自动轮播
  componentDidMount() {   
    const { sliders, interval, toNextPage, getSliders } = this.props;

    // 只发送一次ajax请求，获取到数据后保存在sliders
    sliders.size === 0 && getSliders();

    if (interval === 0) return;

    MeSlider.$timer = setInterval(() => {
      toNextPage(this.props);
    }, interval);
  }

  // 清除轮播
  componentWillUnmount() {
    MeSlider.$timer && clearInterval(MeSlider.$timer);
  }
}

const mapState = state => ({
  width: state.getIn(['sliderReducer', 'width']),
  speed: state.getIn(['sliderReducer', 'speed']),
  sliders: state.getIn(['sliderReducer', 'sliders']),
  curPage: state.getIn(['sliderReducer', 'curPage']),
  interval: state.getIn(['sliderReducer', 'interval']),
  totalPage: state.getIn(['sliderReducer', 'totalPage']),
  animation: state.getIn(['sliderReducer', 'animation']),
  pagination: state.getIn(['sliderReducer', 'pagination']),
});

const mapDispatch = dispatch => ({
  // 下一页
  toNextPage(props) {    
    const { curPage, totalPage, speed } = props;
    
    if (curPage < totalPage) {      
      dispatch(actionCreators.toNextPage(curPage + 1));
    } else {     
      dispatch(actionCreators.toNextPage(curPage + 1));
      setTimeout(() => {
        dispatch(actionCreators.toFirstPage(1));
      }, speed);
    }
  },

  // 上一页
  toPrevPage(props) {
    const { curPage, totalPage, speed } = props;

    if (curPage <= 1) {      
      dispatch(actionCreators.toPrevPage(curPage - 1));
      setTimeout(() => {
        dispatch(actionCreators.toLastPage(totalPage));
      }, speed);
    } else {     
      dispatch(actionCreators.toPrevPage(curPage - 1));
    }
  },

  // 指定页
  toIndexPage(indexPage) {   
    dispatch(actionCreators.toIndexPage(indexPage));
  },

  // 获取幻灯片
  getSliders() {
    dispatch(actionCreators.getSliders());
  }
});

export default connect(mapState, mapDispatch)(MeSlider);
 