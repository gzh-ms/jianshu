import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
  padding-top: 56px;
`;

export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  padding: 30px 0 0 15px;

  .banner-img {
    width: 625px;
    height: 270px;
    border-radius: 5px;
  }
`;

export const HomeRight = styled.div`
  float: right;
  width: 280px;
  padding-top: 30px;
  padding-right: 15px;
  box-sizing: border-box;
`;

// Topic
export const TopicWrapper = styled.div` 
  margin-bottom: 15px;
  padding: 20px 0 10px 0;  
  border-bottom: 1px solid #f0f0f0;

  .container {
    overflow: hidden;
    margin-left: -20px;
  }
`;

export const TopicItem = styled.a.attrs({
  href: '###'
})`
  overflow: hidden;
  float: left;
  display: block;
  height: 32px;
  margin-left: 20px;
  margin-bottom: 15px;
  padding-right: 10px;
  line-height: 32px;
  color: #868686;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 3px;
  background: #f7f7f7;

  .topic-img {
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }

  :hover {
    box-shadow: 0 0 4px rgba(0, 0, 0, .3);
  }
`;

export const TopicItemMore = styled.a.attrs({
  href: '###'
})`
  float: left;
  display:block;
  margin-left: 20px;
  line-height: 32px;
  font-size: 14px;
  color: #868686;

  .right {
    margin-left: 8px;
    font-family: "宋体";
    font-weight: 600;
  }
`;

// list
export const ListItem = styled.div`
  overflow: hidden;
  margin-bottom: 12px;
  padding: 12px 2px 15px 0;
  border-bottom: 1px solid #f0f0f0;

  .list-img {
    float: right;
    width: 150px;
    height: 100px;
    margin-top: 15px;
    border-radius: 5px;
  }

  .fl {
    float: left;
    width: 450px;
  }
`;

export const ListItemTitle = styled.h3`
  color: #000;
  font-size: 18px;
  font-weight: 700px;
  line-height: 30px;

  :hover {
    text-decoration: underline;
  }
`;

export const ListItemDesc = styled.p`
  color: #999;
  font-size: 13px;
  line-height: 24px;
  margin-bottom: 8px;
`;

export const ListItemAddition = styled.div`
  overflow: hidden;
  font-size: 12px;
  line-height: 20px;

  .comment,
  .star {
    overflow: hidden;
    float: left;
    display: block;
    margin-right: 10px;
    color: #b4b4b4;
  }

  a:hover {
    color: #666;
  }

  .iconfont {
    float: left;
    margin-right: 2px;
  }
`;

export const ListItemWriter = styled.a.attrs({
  href: '###'
})`
  float: left;
  margin-right: 10px;
  color: #b4b4b4;
`;

export const LoadMoreArticle = styled.button`
  display: block;
  width: 100%;
  height: 40px;
  margin: 30px 0;
  color: #fff;
  font-size: 13px;
  line-height: 40px;
  background: #999;
  border: none;
  outline: none;
  border-radius: 20px;
  cursor: pointer;
`;

// recommend
export const RecommendWrapper = styled.div`
  min-height: 228px;
  margin-bottom: 14px;
`;

export const RecommendItem = styled.a.attrs({
  href: '###'
})`
  display: block;
  margin-bottom: 6px;

  .recommend-img {
    display: block;
    width: 280px;
    height: 50px;
    border-radius: 4px;
  }
`;

// writer
export const WriterWrapper = styled.div`
  margin-bottom: 20px;
  margin-right: -15px;
  font-size: 13px;
`;

export const WriterTitle = styled.h4`
  overflow: hidden;
  margin-bottom: 20px;
  color: #969696;
  font-size: 14px;
`;

export const WriterSwitch = styled.div`
  float: right;
  cursor: pointer;

  .iconfont {
    display: block;
    float: left;
    margin-right: 4px;
    font-weight: 600;
    font-size: 14px;
    transition: all .5s;
  }
`;

export const WriterList = styled.ul`
  padding-bottom: 5px;
`;

export const WriterListItem = styled.li`
  display: flex;
  margin-bottom: 15px;

  .writer-link {
    display: block;
  }

  .writer-img {
    display: block;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border: 1px solid #f7f7f7;
    box-sizing: border-box;
    border-radius: 50%;
  }

  .writer-info {
    flex: 1;
  }
`;

export const WriterName = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0 10px 0;

  .writer-name {
    font-size: 15px;
    color: #333;
  }

  .focus {
    color: #42c02e;
    cursor: pointer;
  }
`;

export const WriterDetail = styled.p`
  font-size: 12px;
  color: #969696;
`;

export const WriterMore = styled.div` 
  text-align: center;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;

  & > a {
    display: block;
    padding: 10px;
    color: #787878;
    font-size: 13px;
  }

  span {
    font-family: "宋体";
    font-weight: 600;
    margin-left: 4px;
  }
`;

//backtop
export const BackTopWrapper = styled.div`
  position: fixed;
  right: 50px;
  bottom: 50px;
`;
