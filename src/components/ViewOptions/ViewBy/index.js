import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Wrapper, SelectWrapper, Dropdown } from './styledComponents';
import { viewBy } from 'state/Post/action';

function ViewBy({ view, viewBy }) {
  const types = ['card', 'classic', 'compact'];

  const renderViewTypes = () =>
    types.map((type, index) => (
      <option key={index} value={type}>
        {type}
      </option>
    ));

  return (
    <Wrapper>
      <SelectWrapper>
        <Dropdown value={view} onChange={(e) => viewBy(e.target.value)}>
          {renderViewTypes()}
        </Dropdown>
      </SelectWrapper>
    </Wrapper>
  );
}

ViewBy.prototype = {
  view: PropTypes.string,
  viewBy: PropTypes.func,
};

const mapStateToProps = (state) => ({
  view: state.post.view,
});

export default connect(mapStateToProps, { viewBy })(ViewBy);
