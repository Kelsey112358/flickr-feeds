import React, { Fragment } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { connect } from 'react-redux';
import { SEARCH_TYPES } from '../../components';
import {
  fetchFeedsByTags,
  setSearchText,
  setSearchType,
} from '../../store/actions';
import { getValidValues } from '../../store/utils';
import './Searchbar.css';
import { Icon } from 'antd';

const Searchbar = ({
  searchText,
  setSearchText,
  setSearchType,
  fetchFeedsByTags,
}) => (
  <div className="search-bar">
    <Icon type="search" />
    <DebounceInput
      debounceTimeout={1000}
      onChange={(e) => {
        const { value } = e.target;
        if (getValidValues(value).length > 0) {
          setSearchText(value);
          setSearchType(SEARCH_TYPES.TAG);
          fetchFeedsByTags(value);
        }
      }}
      placeholder={`Search by tags`}
      value={searchText}
    />
  </div>
);

const mapState = ({ searchText }) => ({
  searchText,
});
const mapDispatch = {
  fetchFeedsByTags,
  setSearchText,
  setSearchType,
};
export const ConnectedSearchbar = connect(mapState, mapDispatch)(Searchbar);
