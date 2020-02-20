import { formatFeeds, getSearchUrl, getValidValues } from './utils';

describe('utils test suite', () => {
  describe('formatFeeds test suite', () => {
    it('return feeds with empty array if no argument', () => {
      expect(formatFeeds()).toEqual([]);
    });

    it('return feeds with empty array if pass null', () => {
      expect(formatFeeds(null)).toEqual([]);
    });

    it('return feeds with parsed values', () => {
      const fakeFeeds = [
        {
          author: 'example@example.com (author1)',
          author_id: 123,
          date_taken: '2020-02-16T00:00:00-08:00',
          media: { m: 'http://img1.png' },
          tags: 'aa aaaa a',
          title: 'title1',
        },
      ];
      expect(formatFeeds(fakeFeeds)).toEqual([
        {
          author: 'author1',
          authorId: 123,
          dateTaken: '2020-02-16T00:00:00-08:00',
          src: 'http://img1.png',
          tags: ['a', 'aa', 'aaaa'],
          title: 'title1',
        },
      ]);
    });
  });

  describe('getSearchUrl test suite', () => {
    it('return url with default params', () => {
      expect(getSearchUrl()).toEqual(
        'https://www.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&'
      );
    });

    it('return url with id', () => {
      expect(getSearchUrl({ id: 1 })).toEqual(
        'https://www.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&id=1&'
      );
    });
  });

  describe('getValidValues test suite', () => {
    it('return emtry array', () => {
      expect(getValidValues(' ,,    ,')).toEqual([]);
    });

    it('return valid values', () => {
      expect(getValidValues('a,b,test')).toEqual(['a', 'b', 'test']);
    });
  });
});
