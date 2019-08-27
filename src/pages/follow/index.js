import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import { actionCreators } from './store';
import { actionCreators as headerActionCreators } from '../../common/header/store';
 
class Follow extends PureComponent {
  render() {
    const { isLogin } = this.props;

    if (isLogin) {
      return (
        <div>Follow</div>
      );
    } else {
      return <Redirect to="/" />
    }
  }

  componentDidMount() {
    const { changeHeaderNavItemActive } = this.props;

    changeHeaderNavItemActive();
  }
}

const mapState = state => ({
  isLogin: state.getIn(['loginReducer', 'isLogin'])
});

const mapDispatch = dispatch => ({
  changeHeaderNavItemActive() {
    dispatch(headerActionCreators.changeItemActive('follow'));
  }
});
 
export default connect(mapState, mapDispatch)(Follow);
 