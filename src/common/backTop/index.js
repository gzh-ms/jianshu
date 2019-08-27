import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { BackTopWrapper } from './style';
import { actionCreators } from './store';
 
class BackTop extends PureComponent {
  // 回到顶部，0表示不需要动画。暴露的方法
  static BackToTop(speed) {
    if (speed === 0) {
      window.scrollTo(0, 0); 
    }
    let timer = null;
    // 回到顶部动画
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn () {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 0) {
        window.scrollTo(0, scrollTop - 100); // 速度
        timer = requestAnimationFrame(fn);
      } else {
        cancelAnimationFrame(timer);
      }
    });
  }

  render() {
    const { showBackTop } = this.props;  

    if (showBackTop) {
      return (
        <BackTopWrapper onClick={BackTop.BackToTop}>
          <div className="backTop"><i className="iconfont">&#xe631;</i></div>
          <p className="text">回到顶部</p>       
        </BackTopWrapper>
      );
    } else {
      return null;
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.props.isShowBackTop());
  }
  
  // 清除window事件处理程序
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.isShowBackTop());
  }
}

const mapStateToProps = state => ({
  showBackTop: state.getIn(['backTopReducer', 'showBackTop'])
});

let debounce;

const mapDispatchToProps = dispatch => ({
  isShowBackTop() {
    let timer = null;

    // 防抖
    if (!debounce) {
      return debounce = () => {
        clearTimeout(timer);

        timer = setTimeout(() => {
          const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          if (scrollTop > 300) {
            dispatch(actionCreators.showBackTop());
          } else {
            dispatch(actionCreators.hideBackTop());
          }
        }, 200);
      }
    } else {
      return debounce;
    }   
  }
});
 
export default connect(mapStateToProps, mapDispatchToProps)(BackTop);
 