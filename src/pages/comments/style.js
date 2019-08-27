import styled from 'styled-components';

export const CommentWrapper = styled.div`
  display: flex;
  width: 960px;
  height: 2000px;
  margin: 0 auto;
  padding-top: 86px;
`;

export const CommentLeft = styled.div`
  width: 280px;
`;

export const CommentRight = styled.div`
  flex: 1;
  margin-left: 35px;
  padding-top: 2px;
`;

// detail 
export const Title = styled.h4`
  margin-bottom: 20px;
  color: #000;
  font-weight: 700;
  font-size: 14px;
`;

export const Content = styled.div`
`;

export const FindNothing = styled.div`
  margin-top: 150px;
  color: #000;
  font-weight: 700;
  font-size: 14px;
  text-align: center;

  img {
    width: 100px;
    height: 87px;
    vertival-align: top;
    margin-bottom: 20px;
  }
`;