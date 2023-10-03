import React from 'react';

const SearchPanel = () => {
  const searchText = 'Search';
  const searchStyle = {
    fontSize: '16px'
  }
  return <input placeholder={searchText}
    className='input'
    style={searchStyle}></input>
}

export default SearchPanel;