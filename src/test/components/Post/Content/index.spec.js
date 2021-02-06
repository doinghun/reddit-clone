import React from 'react';
import { shallow } from 'enzyme';

import PostContent from 'components/Post/Content';
import PostContentInfo from 'components/Post/Content/Info';
import PostContentTitle from 'components/Post/Content/Title';
import PostContentDetail from 'components/Post/Content/Detail';
import PostContentComments from 'components/Post/Content/Comments';

describe('PostContent', () => {
  const wrapper = shallow(<PostContent />);
  it('Should render correctly', () => {
    expect(wrapper.find(PostContentInfo).exists()).toBeTruthy();
    expect(wrapper.find(PostContentTitle).exists()).toBeTruthy();
    expect(wrapper.find(PostContentDetail).exists()).toBeTruthy();
    expect(wrapper.find(PostContentComments).exists()).toBeTruthy();
  });
});
