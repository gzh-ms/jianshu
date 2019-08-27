import styled from 'styled-components';

//nav-search
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  margin: 9px 0 0 20px;
`;

export const SearchToggle = styled.div`
  position: relative;

  .fangdajing.iconfont {
    display: block;
    position: absolute;
    right: 5px;
    bottom: 2px;
    width: 33px;
    height: 33px;
    line-height: 33px;
    color: #969696;
    text-align: center;
    font-size: 16px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const Search = styled.input`
  width: 180px;
  height: 38px;
  padding:0 40px 0 20px;
  font-size: 14px;
  color: #666;
  border-radius: 20px;
  background: #eee;
  border: none;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: #999;
  }

  &.focused {
    width:250px;

    & ~ .fangdajing {
      background: #777;
      color: #fff;
    }
  }

  &.slide-enter {
    width: 180px;
  }

  &.slide-enter-active {
    width:250px;
    transition: all .3s;
  }

  &.slide-exit {
    width:250px;
  }

  &.slide-exit-active {
    width: 180px;
    transition: all .3s;
  }
`;

// 热门搜索
export const SearchLayer = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  width: 250px;
  margin-top: 9px;
  padding: 20px 0 10px 20px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  box-sizing: border-box;
  border-radius: 4px;
  
  &:before {
    content: " ";
    position: absolute;
    left: 20px;
    bottom: 99%;
    border: 10px solid transparent;
    border-bottom-color: #fff;
  }

  .title {
    margin-bottom: 15px;
    color: #969696;
    font-size: 14px;
  }

  .change {
    float: right;
    margin-right: 20px;
    cursor: pointer;
  }

  .iconfont.xuanzhuan {
    float: right;
    margin-right: 4px;
    font-size: 13px;
    font-weight: 600;
    transition: all .3s ease-in;
    transform-origin: center center;
  }
`;

export const ListItem = styled.li`
  float: left;
  margin-right: 10px;
  margin-bottom: 12px;
  padding: 3px 6px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  cursor: pointer;

  :hover {
    border-color: #979797;
    color: #333;
  }
`;