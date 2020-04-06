import React from 'react';
import { useDispatch } from 'react-redux';
import { Segment, Input } from 'semantic-ui-react';

import * as actions from '../../store/actions/searchVideo';

export default function SearchBar(props) {
  const dispatch = useDispatch();

  function handleInputChange(e) {
    if (e.keyCode === 13) return handleSearchTerm(e.target.value);
  }

  function handleSearchTerm(term) {
    dispatch(actions.searchVideo(term));
  }

  return (
    <div className="search-bar">
      <Segment stacked>
        <Input icon="search" size="large" placeholder="Search ..." onKeyDown={(e) => handleInputChange(e)} />
      </Segment>
    </div>
  );
}
