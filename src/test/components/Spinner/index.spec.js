import React from 'react';
import { shallow } from 'enzyme';

import LoadingSpinner from 'components/Spinner';

it('Should render correctly', () => {
  shallow(<LoadingSpinner />);
});
