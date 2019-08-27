import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {
  WriteWrapper,
  WriteLeft,
  WriteCenter,
  WriteRight,
  BackToHome
} from './style.js';
 
class Write extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    if (loginStatus) {
      return (
        <WriteWrapper>
          <WriteLeft>
            <Link to="/"><BackToHome>回到首页</BackToHome></Link>
          </WriteLeft>
          <WriteCenter></WriteCenter>
          <WriteRight></WriteRight>
        </WriteWrapper>
      );
    } else {
      return <Redirect to="/login" />
    }
  }
}

const mapState = state => ({
  loginStatus: state.getIn(['loginReducer', 'isLogin'])
});

export default connect(mapState, null)(Write);
