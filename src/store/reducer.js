import { SET_FEEDS, SET_SEARCH_TEXT, SET_SEARCH_TYPE } from './actionTypes';

const defaultState = {
  feeds: [],
  searchText: '',
  searchType: '',
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FEEDS:
      return {
        ...state,
        feeds: action.payload,
      };
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };
    case SET_SEARCH_TYPE:
      return {
        ...state,
        searchType: action.payload,
      };
    default:
      return state;
  }
};
