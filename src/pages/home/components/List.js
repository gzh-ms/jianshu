import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';
import {
  ListItem,
  ListItemTitle,
  ListItemDesc,
  ListItemAddition,
  ListItemWriter,
  LoadMoreArticle
} from '../style';
 
class List extends Component {
  // 组件articleList发生改变才重新执行render函数
  shouldComponentUpdate(nextProps) {
    return nextProps.articleList !== this.props.articleList;
  }

  render() {
    const { page, articleList, loadMoreArticle } = this.props;
    return (
      <div className="articleList">
        {
          articleList.map((item, index) => {
            const id = item.get('id');
            return (
              <ListItem key={index}>
                <Link to={"/detail/" + id}>
                  <img alt="pic" className="list-img" src={item.get('imgSrc')} />
                </Link>
                <div className="fl">
                  <Link to={"/detail/" + id}>
                    <ListItemTitle>{item.get('title')}</ListItemTitle>
                  </Link>
                  <ListItemDesc>{item.get('desc')}</ListItemDesc>
                  <ListItemAddition>
                    <ListItemWriter>{item.get('writer')}</ListItemWriter>
                    <a href="###" className="comment">
                      <i className="iconfont">&#xe63b;</i>
                      <span>{item.get('comment')}</span>
                    </a>
                    <div className="star">
                      <i className="iconfont">&#xe64e;</i>
                      <span>{item.get('star')}</span>
                    </div>
                  </ListItemAddition>
                </div>
              </ListItem>
            );
          })
        }
        <LoadMoreArticle onClick={() => loadMoreArticle(page)}>阅读更多</LoadMoreArticle>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articleList: state.getIn(['homeReducer', 'articleList']),
  page: state.getIn(['homeReducer', 'articlePage'])
});

const mapDispatchToProps = dispatch => ({
  loadMoreArticle(page) {
    dispatch(actionCreators.loadMoreArticle(page));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
 