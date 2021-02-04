import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Wrapper, SelectWrapper, Dropdown } from './styledComponents';
import { viewBy } from 'state/Post/action';

function Views({ viewBy }) {
  const types = ['Card', 'Classic', 'Compact'];
  const [viewType, setViewType] = useState('');
  useEffect(() => {
    viewBy(viewType);
  }, [viewBy, viewType]);
  const handleChange = (e) => {
    setViewType(e.target.value);
  };
  const renderViewTypes = () =>
    types.map((type, index) => (
      <option key={index} value={type}>
        {type}
      </option>
    ));

  return (
    <Wrapper>
      <SelectWrapper>
        <Dropdown value={viewType} onChange={(e) => handleChange(e)}>
          {renderViewTypes()}
        </Dropdown>
      </SelectWrapper>
    </Wrapper>
  );
}
export default connect(null, { viewBy })(Views);
