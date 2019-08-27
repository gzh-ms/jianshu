import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 30px;
    background: rgba(0, 0, 0, .12);
    border-radius: 4px;
  }
`;