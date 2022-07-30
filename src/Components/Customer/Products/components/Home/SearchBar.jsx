import React from 'react';
import './Style.css';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = ({ value, changeInput }) => (
  <div className='searchBar-wrap'>
    <SearchIcon className='searchBar-icon' />
    <input
      type='text'
      placeholder='Search Here'
      value={value}
      onChange={changeInput}
    />
  </div>
);

export default SearchBar;
