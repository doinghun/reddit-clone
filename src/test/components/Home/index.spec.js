import React from 'react';
import { shallow } from 'enzyme';

import Home from 'components/Home';

it('Should render correctly', () => {
  shallow(<Home />);
});
