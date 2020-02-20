import React from 'react';
import { Tag, Avatar } from 'antd';
import Moment from 'react-moment';

export const Feed = ({
  author,
  authorId,
  dateTaken,
  tags,
  src,
  onAuthorClick,
  onImgClick,
  onTagClick,
}) => (
  <div className="feed">
    <div className="feed__image__container">
      <img src={src} alt="" onClick={() => onImgClick(src)} />
      <p
        className="author overlay-block"
        onClick={() => onAuthorClick(authorId, author)}
      >
        <Avatar size="small" icon="user" />{' '}
        <span className="author-name">{author}</span>
      </p>
      <p className="time overlay-block">
        <Moment format="YYYY-MM-DD">{dateTaken}</Moment>
      </p>
    </div>
    <div className="tags">
      {tags.length !== 0 && <Avatar size="small" icon="tag" />}
      {tags.map((tag, i) => (
        <Tag key={i} onClick={() => onTagClick(tag)}>
          {tag}
        </Tag>
      ))}
    </div>
  </div>
);
