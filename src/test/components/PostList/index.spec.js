import React from 'react';
import { shallow } from 'enzyme';

import PostList from 'components/PostList';

it('Should render correctly', () => {
  shallow(<PostList />);
});
