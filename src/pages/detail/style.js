import styled from 'styled-components';

export const DetailWrapper = styled.div`
  // position: relative;
  width: 620px;
  margin: 0 auto;
  padding-top: 86px;
`;

export const DetailTitle = styled.h1`
  margin-top: 20px;
  margin-bottom: 35px;
  color: #333;
  font-size: 34px;
  font-weight: 700;
  line-height: 46px;
`;

export const DetailContent = styled.div`
  color: #2f2f2f;
  font-size: 15px;
  line-height: 30px;

  p {
    margin-bottom: 25px;
  }

  img {
    display: block;
    width: 620px;
    padding-bottom: 25px;
  }
`;

export const WriterDesc = styled.div`
  overflow: hidden;
  margin: 30px 0 40px;

  .writer-img {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    border-radius: 50%;
  }

  .writer-desc {
    float: left;
  }
`;

export const WriterName = styled.div`
  overflow: hidden;
  font-size: 16px;
  color: #333;
  padding: 5px 0 10px 0;

  .name {
    float: left;
    margin-right: 10px;
    margin-top: 2px;
  }

  .follow {
    float: left;
     
    div {
      padding: 3px 10px;
      color: #fff;
      font-size: 13px;
      background: #42c02e;
      border-radius: 10px;
      border: 1px solid #42c02e;
      cursor: pointer;

      &.followed {
        background: none;
        color: #8c8c8c;
        border: 1px solid hsla(0, 0%, 59%, .6);
      }
    }
  }
`;

export const WriterInfo = styled.p`
  font-size: 12px;
  color: #979797;
`;

// backtop
export const Addition = styled.div`
  position: fixed;
  right: 50px;
  bottom: 50px;
  box-sizing: border-box;

  .backtop-wrapper {
    div {
      border-bottom: none;
    }
  }
`;

// share 
export const ShareWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  z-index: 2;
  line-height: 50px;
  text-align: center;
  border: 1px solid #ddd;
  box-sizing: border-box;
  background: #fff;
  cursor: pointer;

  .iconfont {
    font-size: 20px;
    color: #000;
  }


  .text {
    position: absolute;
    right: 120%;
    top: 50%;
    z-index: 1;
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
      z-index: 1;
      border: 10px solid transparent;
      border-left-color: #000;
    }
  }
`;

export const ShareList = styled.ul`
  overflow: hidden;
  position: absolute;
  right: 120%;
  bottom: -45px; 
  width: 200px;
  background: #fff;
  border: 1px solid #999;
  border-radius: 8px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .4);

  :after {
    content: "";
    display: block;
    position: absolute;
    left: 97%;
    bottom: 60px;
    width: 13px;
    height: 13px;
    background: #fff;
    border: 1px solid #999;
    transform: rotate(45deg);
    border-left: none;
    border-bottom: none;
  }
`;
export const ShareItem = styled.li`
  display: flex;
  height: 32px;
  padding: 0 15px;
  line-height: 32px;
  color: #333;
  font-size: 14px;
  cursor: pointer;

  :hover {
    background: #f5f5f5;
  }

  .iconfont {
    margin-right: 8px;
  }

  .weixin {
    color: #42c02e;
  }

  .weibo {
    color: #f01414;
  }

  .qqzone {
    color: orange;
  }

  .twitter {
    color: lightSkyBlue;
  }

  .facebook {
    color: blue;
  }

  .google {
    color: red;
  }

  .douban {
    color: green;
  }
`;

// shareTo
export const ShareToContainer = styled.div`
  position: relative;
  height: 100%;
`;

export const ShareToWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, .6);
`;

export const ShareToContent = styled.div`
  width: 360px;
  height: 376px;
  background: #fff;
  border: 1px solid #999;
  border-radius: 4px;
  text-align: center;

  .title {
    padding: 20px 60px 30px;
    color: #666;
    font-size: 15px;    
    line-height: 26px;
  }

  .share-to-img {
    padding: 10px 60px 0;
  }
`;

export const CloseShareTo = styled.span`
  display: block;
  padding: 20px 20px 0;
  text-align: right;
  color: #666;
  font-size: 18px;
  cursor: pointer;
`;
