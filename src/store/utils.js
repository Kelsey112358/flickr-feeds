const getTags = (tags) => tags.split(/\s+/).filter((tag) => tag.length > 0);
const sortTags = (tags) => tags.sort((a, b) => a.length - b.length);

const getAuthorName = (author) =>
  author.match(/\((.*)\)/)[1].replace(/['"]+/g, '');

export const formatFeeds = (feeds) => {
  if (!Array.isArray(feeds)) {
    return [];
  }
  return feeds.map(({ title, media, date_taken, author, author_id, tags }) => ({
    author: getAuthorName(author),
    authorId: author_id,
    dateTaken: date_taken,
    src: media && media.m,
    tags: sortTags(getTags(tags)),
    title,
  }));
};

const DOMAIN = 'https://www.flickr.com';
const FEEDS_URL = 'services/feeds/photos_public.gne';
const defaultParams = {
  format: 'json',
  jsoncallback: '?',
};

export const getSearchUrl = (params = {}) => {
  params = {
    ...defaultParams,
    ...params,
  };
  const searchParams = Object.entries(params).reduce((str, [key, value]) => {
    str += `${key}=${value}&`;
    return str;
  }, '?');
  return `${DOMAIN}/${FEEDS_URL}${searchParams}`;
};

export const DELIMITER = ',';

export const getValidValues = (value) =>
  value.split(DELIMITER).filter((item) => item.trim() !== '');
