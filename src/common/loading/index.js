import React from 'react';
import loadingImg from '../../static/loading.gif';
import { LoadingWrapper } from './style';

export default () => (
  <LoadingWrapper>
    <img alt="img" src={loadingImg} />
  </LoadingWrapper>
);
 