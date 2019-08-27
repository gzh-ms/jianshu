import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import CommentsDropdown from '../../common/header/components/commentsDropdown';
import Detail from './components/detail';
// import { actionCreators } from './store';
import { actionCreators as headerActionCreators } from '../../common/header/store';
import {
  CommentWrapper,
  CommentLeft,
  CommentRight
} from './style';
 
class Comments extends PureComponent {
  render() {
    const { match } = this.props;
    
    return (
      <CommentWrapper>
        <CommentLeft>
          <CommentsDropdown activeItem={match.params.name} />
        </CommentLeft>
        <CommentRight>
          <Detail activeItem={match.params.name} />
        </CommentRight>
      </CommentWrapper>
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
    dispatch(headerActionCreators.changeItemActive('comments'));
  }
});
 
export default connect(mapState, mapDispatch)(Comments);
 