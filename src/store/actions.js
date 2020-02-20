import $ from 'jquery';
import { SET_FEEDS, SET_SEARCH_TEXT, SET_SEARCH_TYPE } from './actionTypes';
import { formatFeeds, getSearchUrl, getValidValues, DELIMITER } from './utils';

export const setFeeds = (feeds) => ({
  type: SET_FEEDS,
  payload: feeds,
});

export const fetchRandomFeeds = () => (dispatch) =>
  $.getJSON(getSearchUrl())
    .done((response) => dispatch(setFeeds(formatFeeds(response.items))))
    .fail((err) => {
      console.log('Fetch Error :-S', err);
    });

export const fetchFeedsByTags = (tags) => (dispatch) => {
  tags = getValidValues(tags).join(DELIMITER);
  $.getJSON(getSearchUrl({ tags }))
    .done((response) => dispatch(setFeeds(formatFeeds(response.items))))
    .fail((err) => {
      console.log('Fetch Error :-S', err);
    });
};

export const fetchFeedsByAuthor = (authorId) => (dispatch) =>
  $.getJSON(getSearchUrl({ id: authorId }))
    .done((response) => dispatch(setFeeds(formatFeeds(response.items))))
    .fail((err) => {
      console.log('Fetch Error :-S', err);
    });

export const setSearchText = (text) => ({
  type: SET_SEARCH_TEXT,
  payload: text,
});
export const setSearchType = (type) => ({
  type: SET_SEARCH_TYPE,
  payload: type,
});
