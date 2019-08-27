import styled from 'styled-components';

export const SliderWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 625px;
  height: 270px;
  border-radius: 6px;
`;

export const SliderContainer = styled.div`
  overflow: hidden;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 270px;
`;

export const Slide = styled.div`

  a {
    display: block;
  }

  .slide-img {
    display: block;
    width: 625px;
    height: 270px;
  }
`;

export const PaginationWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  left: 50%;
  bottom: 0;
  height: 30px;
  transform: translate(-50%, 0);

  .line {
    float: left;
    width: 25px;
    height: 30px;
    padding: 1px;
    background: transparent;
    cursor: pointer;

    span {
      display: block;
      height: 2px;
      margin-top: 10px;
      background: hsla(0, 0%, 47%, .4);
      transition: all .5s;
    }

    &.active {
      span {
        background: #fff;
      }
    }
  }

  &.active {
    background: #fff;
  }
`;

export const PrevBtn = styled.div`
  overflow: hidden;
  opacity: 0;
  position: absolute;
  left: 0;
  top: 50%;
  width: 40px;
  height: 50px;
  margin-top: -25px;
  text-align: center;
  line-height: 50px;
  background: rgba(0, 0, 0, .4);
  border-radius: 0 6px 6px 0;
  cursor: pointer;

  .iconfont {
    display: block;
    color: #fff;
    font-size: 18px;
    transform: rotate(-90deg);
  }

  :hover {
    opacity: 1;
  }
`;

export const NextBtn = styled.div`
  overflow: hidden;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 50%;
  width: 40px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  margin-top: -25px;
  background: rgba(0, 0, 0, .4);
  border-radius: 6px 0 0 6px;
  cursor: pointer;

  .iconfont {
    display: block;
    color: #fff;
    font-size: 18px;
    transform: rotate(90deg);
  }

  :hover {
    opacity: 1;
  }
`;
