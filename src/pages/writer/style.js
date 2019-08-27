import styled from 'styled-components';

export const WriterWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  padding: 80px 0 50px 15px;
`;

export const WriterHeader = styled.div`

  .writerImg {
    display: block;
    width: 960px;
    height: 100px;
    border-radius: 6px;
  }
`;

export const WriterList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const WriterItem = styled.div`
  width: 300px;
`;

export const WriterInfo = styled.div`
  position: relative;
  margin-top: 80px;
  padding: 0 20px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  background: hsla(0, 0%, 71%, .1);
  box-sizing: border-box;

  :hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  }

  & > a {
    display: block;
    margin-bottom: 10px;
  } 

  .writerPic {
    display: block;
    width: 100px;
    height: 100px;
    margin: -40px auto 20px auto;
    border-radius: 50%;
    border: 1px solid #ddd;
    box-sizing: border-box;
  }

  hr {
    margin: 20px 0;
    border: 0;
    border-top: 1px solid #ddd;
  }
`;

export const WriterName = styled.h3`
  margin-bottom: 10px;  
  text-align: center;
  color: #000;
  font-weight: 700;
  font-size: 21px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const WriterDesc = styled.p` 
  width: 180px;
  height: 50px;
  margin: 0 auto;
  color: #333;
  font-size: 13px;
  line-height: 22px;
  text-align: center;
`;

export const FollowBtnWrapper = styled.div`

div {
    width: 100px;
    height: 39px;
    margin: 0 auto 10px auto;
    background: #42c02e;
    border: 1px solid #42c02e;
    border-radius: 20px;
    color: #fff;
    font-size: 17px;
    line-height: 39px;
    text-align: center;
    cursor: pointer;
  
    &.followed {
      color: #8c8c8c;
      border-color: hsla(0, 0%, 59%, .6);
      background: none;
    }
  }
`;

export const Split = styled.div`
  float: left;
  margin-top: -28px;
  padding-right: 10px;
  color: #969696;
  font-size: 12px;
  background: #f8f8f8;
`;

export const RecentUpdate = styled.div`
  margin-top: 15px;

  .link {
    display: block;
    margin-bottom: 10px;
    color: #969696;
    font-size: 13px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    :hover {
      color: #333;
    }
  }
`;

export const LoadMore = styled.div`
  width: 366px;
  height: 40px;
  margin: 40px auto;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-size: 15px;
  background: #a5a5a5;
  border-radius: 40px;
  cursor: pointer;

  :hover {
    background: #666;
  }
`;

// backtop
export const BackTopWrapper = styled.div`
  position: fixed;
  right: 70px;
  bottom: 70px;
`;