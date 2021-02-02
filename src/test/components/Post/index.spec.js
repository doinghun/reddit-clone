import React from 'react';
import { shallow } from 'enzyme';

import Post from 'components/Post';

it('Should render correctly', () => {
  shallow(<Post />);
});
