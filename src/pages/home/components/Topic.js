// PureComponent 当组件数据发生改变时才重新执行render函数
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  TopicWrapper,
  TopicItem,
  TopicItemMore
} from '../style';
 
class Topic extends PureComponent {
  render() {
    const { topicList } = this.props;

    return (
      <TopicWrapper>
        <div className="container">
          {topicList.map(item => (
            <TopicItem key={item.get('id')}>
              <img className="topic-img" src={item.get('imgSrc')} alt="img"/>
              {item.get('title')}
            </TopicItem>)
          )}
          <TopicItemMore>更多热门专题<span className="right">&gt;</span></TopicItemMore>
        </div>
      </TopicWrapper>
    );
  }
}

const mapStateToProps = state => ({
  topicList: state.getIn(['homeReducer', 'topicList'])
});

export default connect(mapStateToProps, null)(Topic);
 