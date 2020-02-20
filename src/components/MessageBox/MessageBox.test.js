import { shallow, mount } from 'enzyme';
import React from 'react';
import { MessageBox } from './MessageBox';
import { Tag } from 'antd';

describe('MessageBox test suite', () => {
  const getBaseProps = () => ({
    searchText: 'search',
    searchType: 'Author'
  });

  it('render message properly', () => {
    const wrapper = shallow(<MessageBox {...getBaseProps()} />);
    expect(wrapper.find('p').text()).toEqual('Show result of Author: search');
  });

  it('not render message if searchText is empty', () => {
    const props = {
      ...getBaseProps(),
      searchText: ''
    };
    const wrapper = shallow(<MessageBox {...props} />);
    expect(wrapper.find('p')).toHaveLength(0);
  });

  it('render tags properly', () => {
    const props = {
      ...getBaseProps(),
      searchText: 'a,test,,',
      searchType: 'Tag'
    };
    const wrapper = mount(<MessageBox {...props} />);
    expect(wrapper.find(Tag)).toHaveLength(2);
    expect(
      wrapper
        .find(Tag)
        .at(0)
        .text()
    ).toEqual('a');
    expect(
      wrapper
        .find(Tag)
        .at(1)
        .text()
    ).toEqual('test');
  });
});
