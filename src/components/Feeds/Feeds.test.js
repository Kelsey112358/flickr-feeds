import { shallow } from 'enzyme';
import React from 'react';
import { Feeds } from './Feeds';
import { Modal, Empty } from 'antd';

describe('Feeds test suite', () => {
  const getBaseProps = () => ({
    feeds: [
      {
        author: 'author1',
        authorId: 123,
        dateTaken: '2020-02-16T00:00:00-08:00',
        tags: ['tag1', 'tag2'],
        src: 'http://img.png',
      },
    ],
    fetchFeedsByAuthor: jest.fn(),
    fetchFeedsByTags: jest.fn(),
    fetchRandomFeeds: jest.fn(),
    // setSearchText: jest.fn(),
    // setSearchType: jest.fn(),
  });

  it('render Empty component if no feeds', () => {
    const props = {
      ...getBaseProps(),
      feeds: [],
    };
    const wrapper = shallow(<Feeds {...props} />);
    expect(wrapper.find(Empty).length).toEqual(1);
  });

  it('not render Modal initially', () => {
    const wrapper = shallow(<Feeds {...getBaseProps()} />);
    expect(wrapper.find(Modal).length).toEqual(0);
  });

  it('render Modal if have src', () => {
    const wrapper = shallow(<Feeds {...getBaseProps()} />);
    wrapper.setState({ src: 'src' });
    expect(wrapper.find(Modal).length).toEqual(1);
  });
});
