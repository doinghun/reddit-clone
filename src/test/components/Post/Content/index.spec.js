import React from 'react';
import { shallow } from 'enzyme';

import PC from 'components/Post/Content';
import PostContentDetail from 'components/Post/Content/Detail';
import PostContentComments from 'components/Post/Content/Comments';

describe('PostContent', () => {
  const PostContent = shallow(<PC />);
  it('Should render correctly', () => {
    expect(PostContent.find(PostContentDetail).exists()).toBeTruthy();
    expect(PostContent.find(PostContentComments).exists()).toBeTruthy();
  });
});
