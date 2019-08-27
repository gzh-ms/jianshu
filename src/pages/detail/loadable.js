import React from 'react';
import Loadable from 'react-loadable';
import MeLoading from '../../common/loading';

const LoadableComponent = Loadable({
  loader: () => import('./index.js'),
  loading: MeLoading
});

export default () => <LoadableComponent />;
