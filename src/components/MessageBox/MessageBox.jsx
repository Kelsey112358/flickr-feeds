import React from 'react';
import { connect } from 'react-redux';
import { Tag } from 'antd';
import './MessageBox.css';
import { getValidValues } from '../../store/utils';

import { SEARCH_TYPES } from '../../components';

export const MessageBox = ({ searchText, searchType }) => {
  let values;
  if (searchType === SEARCH_TYPES.TAG) {
    values = getValidValues(searchText).map((value, i) => (
      <Tag key={i}>{value}</Tag>
    ));
  } else {
    values = searchText;
  }
  return (
    searchText && (
      <p>
        Show result of {searchType}: {values}
      </p>
    )
  );
};

const mapState = ({ searchText, searchType }) => ({
  searchText,
  searchType
});
export const ConnectedMessageBox = connect(mapState, null)(MessageBox);
