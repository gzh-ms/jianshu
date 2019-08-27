import styled from 'styled-components';
import logoPic from '../../static/logo.png';

// header
export const HeaderWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  background: #fff;
  box-sizing: border-box;
`;

export const HeaderContent = styled.div`
  position: relative;
  width: 1300px;
  height: 100%;
  margin: 0 auto;
`;

// logo
export const Logo = styled.div`
  float: left;
  width: 100px;
  height: 56px;
  background-image: url(${logoPic});
  background-size: cover;
  cursor: pointer;
`;

// nav
export const Nav = styled.ul`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const NavItem = styled.li`
  position: relative;
  display: block;
  height: 100%;
  padding: 0 15px;
  line-height: 56px;
  cursor: pointer;

  :hover {
    background: #f5f5f5;
  }

  > a {
    display: block;
    color: #333;
    font-size: 17px;
    font-weight: 400;

    
  }

  &.fl {
    float: left;
  }

  &.active {
    a {
      color: #ea6f5a;
    }
  }

  &.fr {
    float: right;
    color: #979797;
    
    a {
      color: #979797;

      :hover {
        color: #333;
      }
    }

    :hover {
      color: #333;
    }
  }

  .iconfont {
    font-size: 22px;
    margin-right: 4px;
    vertical-align: -2px;
  }

  &.logout {
    margin-right: -15px;
  }

  &.register {
    padding-right: 0;
  }


`;

// 右边
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.button`
  display: block;
  height: 38px;
  padding: 6px 12px;
  margin-top: 8px;
  line-height: 24px;
  font-size: 15px;
  text-align: center;
  border-radius: 20px;
  box-sizing: border-box;
  border: 1px solid rgba(236, 97, 73, .7);
  outline: none;
  cursor: pointer;

  &.reg {
    width: 80px;  
    color: #ea6f5a;
    background: #fff;

    :hover {
      color: #fff;
      background: #ea6f5a;
    }
  }

  &.writing {
    width: 100px;
    color: #fff;
    background: #ea6f5a;

    .iconfont {
      margin-right: 5px;
    }

    :hover {
      color: #ea6f5a;
      background: #fff;
    }
  }
`;

// message
export const CommentsDropdownWrap = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  margin-top: 2px;
  border-radius: 3px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, .2);
`;

export const MessageDropdown = styled.div`
  padding: 4px 0;
  background: #fff;  

  a {
    display: block;
  }
`;

export const DropdownItem = styled.div`
  min-width: 160px; 
  height: 30px;
  padding:10px 20px;
  line-height: 30px;
  color: #333;
  font-size: 14px;
  font-weight: 400;
  border-radius: 3px;

  :hover {
    background: #f5f5f5;
  }

  .iconfont {
    margin-right: 22px;
    color: #ea6f5a
    font-size: 22px;
    vertical-align: -3px;
  }

  &.active {
    background: #f5f5f5;
  }
`;