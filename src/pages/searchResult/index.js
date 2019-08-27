import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators as headerActionCreators } from '../../common/header/store';
import MeHeader from '../../common/header';
import {
  ResContainer,
} from './style';
 
class SearchResult extends PureComponent {
  render() {
    return (
      <Fragment>
        <MeHeader />
        <ResContainer>
          ResContainer
        </ResContainer>
      </Fragment>
    );
  }

  componentDidMount() {
    const { changeHeaderNavItemActive } = this.props;

    changeHeaderNavItemActive();
  }
}

const mapState = state => ({

});

const mapDispatch = dispatch => ({
  changeHeaderNavItemActive() {
    dispatch(headerActionCreators.changeItemActive('search'));
  }
});
 
export default connect(mapState, mapDispatch)(SearchResult);
 