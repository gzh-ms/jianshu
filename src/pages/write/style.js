import styled from 'styled-components';

export const WriteWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: #fff;
`;

export const WriteLeft = styled.div`
  float: left;
  width: 15%;
  height: 100%;
  background: #404040;
`;

export const WriteCenter = styled.div`
  float: left;
  width: 20%;
  height: 100%;
  background: #f5f5f5;
`;

export const WriteRight = styled.div`
  float: left;
  width: 65%;
  height: 100%;
`;

export const BackToHome = styled.button`
  display: block;
  margin: 50px auto 0;
  padding: 9px 75px;
  font-size: 15px;
  color: #ec7259;
  background: transparent;
  border: 1px solid #ec7259;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
`;
