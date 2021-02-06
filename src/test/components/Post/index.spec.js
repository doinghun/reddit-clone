import React from 'react';
import { shallow } from 'enzyme';

import Post from 'components/Post';
import PostContent from 'components/Post/Content';
import PostVote from 'components/Post/Vote';

describe('Post', () => {
  const wrapper = shallow(<Post />);
  it('Should render correctly', () => {
    expect(wrapper.find(PostContent).exists()).toBeTruthy();
    expect(wrapper.find(PostVote).exists()).toBeTruthy();
  });
});
