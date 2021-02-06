import React from 'react';
import { shallow } from 'enzyme';

import ViewOptions from 'components/ViewOptions/';
import Sort from 'components/ViewOptions/Sort';
import ViewBy from 'components/ViewOptions/ViewBy';

describe('ViewOptions', () => {
  const wrapper = shallow(<ViewOptions />);
  it('Should render correctly', () => {
    expect(wrapper.find(Sort).exists()).toBeTruthy();
    expect(wrapper.find(ViewBy).exists()).toBeTruthy();
  });
});
