import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageDropdown,
  DropdownItem
} from '../style';

export default props => {

  return (
    <MessageDropdown>
      <Link to="/comments/comments">
        <DropdownItem className={props.activeItem === 'comments' ? 'active' : ''}>
          <i className="iconfont">&#xe63c;</i>
          <span className="text">评论</span>
        </DropdownItem>
      </Link>
      <Link to="/comments/messages">
        <DropdownItem className={props.activeItem === 'messages' ? 'active' : ''}>
          <i className="iconfont">&#xe60c;</i>
          <span className="text">简信</span>
        </DropdownItem>
      </Link>
      <Link to="/comments/requests">
        <DropdownItem className={props.activeItem === 'requests' ? 'active' : ''}>
          <i className="iconfont">&#xe618;</i>
          <span className="text">投稿请求</span>
        </DropdownItem>
      </Link>
      <Link to="/comments/likes">
        <DropdownItem className={props.activeItem === 'likes' ? 'active' : ''}>
          <i className="iconfont">&#xe663;</i>
          <span className="text">喜欢和赞</span>
        </DropdownItem>
      </Link>
      <Link to="/comments/follows">
        <DropdownItem className={props.activeItem === 'follows' ? 'active' : ''}>
          <i className="iconfont">&#xe685;</i>
          <span className="text">关注</span>
        </DropdownItem>
      </Link>
      <Link to="/comments/money">
        <DropdownItem className={props.activeItem === 'money' ? 'active' : ''}>
          <i className="iconfont">&#xe625;</i>
          <span className="text">赞赏和付费</span>
        </DropdownItem>
      </Link>
      <Link to="/comments/others">
        <DropdownItem className={props.activeItem === 'others' ? 'active' : ''}>
          <i className="iconfont">&#xe708;</i>
          <span className="text">其他提醒</span>
        </DropdownItem>
      </Link>
    </MessageDropdown>
  );
}
