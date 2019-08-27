import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MeSearch from '../search';
import CommentsDropdown from './components/commentsDropdown';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {
  HeaderWrapper,
  HeaderContent,
  Logo,
  Nav,
  NavItem,
  Addition,
  Button,
  CommentsDropdownWrap
} from './style'; // styled-components

class MeHeader extends PureComponent {
  render() {    

    return (
      <HeaderWrapper>
        <HeaderContent>
          <Link to="/"><Logo /></Link>         
          {this.getHeaderNav()}
          <Addition>
            <Link to="/write">
              <Button className="writing">
                <i className="iconfont">&#xe624;</i>
                写文章
              </Button>
            </Link>
          </Addition>
        </HeaderContent>
      </HeaderWrapper>
    );
  }

  getHeaderNav() {
    const { isLogin, headerNavItemActive, mouseInMsg, logout, changeItemActive, messageDropdown } = this.props;

    if (!isLogin) {
      return (
        <Nav>            
          <NavItem
            className={headerNavItemActive==='home' ? "fl active" : 'fl'}
            onClick={() => changeItemActive('home')}
          >
            <Link to="/">
              <i className="iconfont">&#xe667;</i>
              <span className="name">首页</span>
            </Link>
          </NavItem>
          <NavItem
            className={headerNavItemActive==='download' ? "fl active" : 'fl'}
            onClick={() => changeItemActive('download')}
          >
            <Link to="/download">
              <i className="iconfont">&#xe853;</i>
              <span className="name">下载APP</span>
            </Link>
          </NavItem>
          <NavItem className="fr register"><Link to="/register"><Button className="reg">注册</Button></Link></NavItem>
          <NavItem className="fr login"><Link to="/login">登录</Link></NavItem>
          {/* 热门搜索 */}
          <MeSearch />
        </Nav>
      );
    } else {
      return (
        <Nav>            
          <NavItem
            className={headerNavItemActive==='home' ? "fl active" : 'fl'}
            onClick={() => changeItemActive('home')}
          >
            <Link to="/">
              <i className="iconfont">&#xe667;</i>
              <span className="name">发现</span>
            </Link>
          </NavItem>
          <NavItem
            className={headerNavItemActive==='follow' ? "fl active" : 'fl'}
            onClick={() => changeItemActive('follow')}
          >
            <Link to="/follow">
              <i className="iconfont">&#xe62f;</i>
              <span className="name">关注</span>
            </Link>
          </NavItem>
          <NavItem
            className={headerNavItemActive==='comments' ? "fl active" : 'fl'}
            onMouseEnter={() => messageDropdown(mouseInMsg)}
            onMouseLeave={() => messageDropdown(mouseInMsg)}
          >
            <Link to="/comments/comments">
              <i className="iconfont">&#xe63b;</i>
              <span className="message">消息</span>
            </Link>
            {
              mouseInMsg ? <CommentsDropdownWrap><CommentsDropdown /></CommentsDropdownWrap> : 
              null
            }
          </NavItem>
          <NavItem className="fr logout" onClick={logout}>退出</NavItem>
          {/* 热门搜索 */}
          <MeSearch />
        </Nav>
      );
    }
  }
}

// props
const mapStateToProps = state => ({
  isLogin: state.getIn(['loginReducer', 'isLogin']),
  headerNavItemActive: state.getIn(['headerReducer', 'headerNavItemActive']),
  mouseInMsg: state.getIn(['headerReducer', 'mouseInMsg'])
});

// methods
const mapDispatchToProps = dispatch => ({
  // 点击退出
  logout() {
    dispatch(loginActionCreators.logout());
  },

  // 改变文字颜色
  changeItemActive(str) {
    dispatch(actionCreators.changeItemActive(str));
  },

  // 消息
  messageDropdown(mouseInMsg) {
    dispatch(actionCreators.showMessageDropdown(!mouseInMsg));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MeHeader);
