import styled from 'styled-components';

export const BackTopWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #ddd;
  box-sizing: border-box;
  background: #fff;

  .backTop {
    position: relative;
    display: block;
    z-index: 2;
    color: #999;
    cursor: pointer;

    :hover ~.text {
      display: block;
    }
  }

  .text {
    display: none;
    position: absolute;
    right: 120%;
    top: 50%;
    width: 88px;
    height: 35px;
    margin-top: -18px;
    line-height: 35px;
    text-align: center;
    color: #fff;
    font-size: 13px;
    background: #000;
    border-radius: 4px;

    :after {
      content: "";
      overflow: hidden;
      position: absolute;
      left: 96%;
      top: 8px;
      border: 10px solid transparent;
      border-left-color: #000;
    }
  }
`;