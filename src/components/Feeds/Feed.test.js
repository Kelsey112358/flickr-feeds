import { Tag } from 'antd';
import { shallow } from 'enzyme';
import React from 'react';
import { Feed } from './Feed';

describe('Feed test suite', () => {
  const getBaseProps = () => ({
    author: 'author1',
    authorId: 123,
    dateTaken: '2020-02-16T00:00:00-08:00',
    tags: ['tag1', 'tag2'],
    src: 'http://img.png',
    onAuthorClick: jest.fn(),
    onImgClick: jest.fn(),
    onTagClick: jest.fn()
  });

  it('render Searchbar with correct props', () => {
    const wrapper = shallow(<Feed {...getBaseProps()} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('trigger onAuthorClick with correct parameters', () => {
    const props = getBaseProps();
    const wrapper = shallow(<Feed {...props} />);

    wrapper.find('.author').simulate('click');

    expect(props.onAuthorClick).toBeCalledWith(123, 'author1');
  });

  it('trigger onImgClick with correct parameters', () => {
    const props = getBaseProps();
    const wrapper = shallow(<Feed {...props} />);

    wrapper.find('img').simulate('click');

    expect(props.onImgClick).toBeCalledWith('http://img.png');
  });

  it('trigger onTagClick with correct parameters', () => {
    const props = getBaseProps();
    const wrapper = shallow(<Feed {...props} />);

    wrapper
      .find(Tag)
      .at(0)
      .simulate('click');

    expect(props.onTagClick).toBeCalledWith('tag1');
  });
});
