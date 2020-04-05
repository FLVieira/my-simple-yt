import React, { useState } from 'react';
import { Segment, Input } from 'semantic-ui-react';

export default function SearchBar(props) {
  // const [] = useState('');

  function handleInputChange(e) {
    if (e.keyCode === 13) return handleSearchTerm(e.target.value);
  }

  function handleSearchTerm(term) {
    console.log(term);
  }

  return (
    <div className="search-bar">
      <Segment stacked>
        <Input icon="search" size="large" placeholder="Search ..." onKeyDown={(e) => handleInputChange(e)} />
      </Segment>
    </div>
  );
}
