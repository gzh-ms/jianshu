import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  RecommendWrapper,
  RecommendItem
} from '../style';
 
class Recommend extends Component {
  // 更新
  shouldComponentUpdate(nextProps) {   
    return nextProps.recommendList !== this.props.recommendList;
  }

  render() {
    const { recommendList } = this.props;  
    return (
      <RecommendWrapper>
        {recommendList.map(item => (
          <RecommendItem key={item.get('id')}>
            <img alt="pic" className="recommend-img" src={item.get('imgSrc')} />
          </RecommendItem>
        ))}
      </RecommendWrapper>
    );
  }
}

const mapStateToProps = state => ({
  recommendList: state.getIn(['homeReducer', 'recommendList'])
}); 

export default connect(mapStateToProps, null)(Recommend);
 