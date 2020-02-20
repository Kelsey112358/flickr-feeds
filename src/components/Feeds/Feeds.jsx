import { Modal, Empty } from 'antd';
import React, { Fragment, PureComponent } from 'react';
import Masonry from 'react-masonry-css';
import { connect } from 'react-redux';
import {
  fetchFeedsByAuthor,
  fetchFeedsByTags,
  fetchRandomFeeds,
  setSearchText,
  setSearchType,
} from '../../store/actions';
import { Feed } from './Feed';
import './feeds.css';

const breakpointColumnsObj = {
  default: 4,
  1400: 3,
  900: 2,
  600: 1,
};

export const SEARCH_TYPES = {
  TAG: 'Tag',
  AUTHOR: 'Author',
};

export class Feeds extends PureComponent {
  state = {
    src: '',
    visible: false,
  };

  componentDidMount() {
    this.props.fetchRandomFeeds();
  }

  handleCancel = () =>
    this.setState({
      visible: false,
    });

  handleImgClick = (src) => {
    this.setState({
      src,
      visible: true,
    });
  };

  handleTagClick = (tag) => {
    this.props.fetchFeedsByTags(tag);
    this.props.setSearchText(tag);
    this.props.setSearchType(SEARCH_TYPES.TAG);
  };

  handleAuthorClick = (authorId, author) => {
    this.props.fetchFeedsByAuthor(authorId);
    this.props.setSearchText(author);
    this.props.setSearchType(SEARCH_TYPES.AUTHOR);
  };

  render() {
    const { feeds } = this.props;
    const { src, visible } = this.state;
    return (
      <Fragment>
        {feeds.length > 0 ? (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {feeds.map((feed, i) => (
              <Feed
                key={i}
                {...feed}
                onAuthorClick={this.handleAuthorClick}
                onImgClick={this.handleImgClick}
                onTagClick={this.handleTagClick}
              />
            ))}
          </Masonry>
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
        {src && (
          <Modal
            visible={visible}
            onCancel={this.handleCancel}
            footer={null}
            width="50%"
          >
            <img src={src} alt="" />
          </Modal>
        )}
      </Fragment>
    );
  }
}

const mapState = ({ feeds }) => ({
  feeds,
});
const mapDispatch = {
  fetchFeedsByTags,
  fetchFeedsByAuthor,
  fetchRandomFeeds,
  setSearchText,
  setSearchType,
};
export const ConnectedFeeds = connect(mapState, mapDispatch)(Feeds);
