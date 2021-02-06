import React from 'react';
import { shallow } from 'enzyme';

import Home from 'components/Home';
import {
  HomeMainSection,
  SubRedditTitle,
} from 'components/Home/styledComponents';

describe('Home', () => {
  const wrapper = shallow(<Home />);
  it('Should render correctly', () => {
    expect(wrapper.find(HomeMainSection).exists()).toBeTruthy();
    expect(wrapper.find(SubRedditTitle).exists()).toBeTruthy();
  });
});
