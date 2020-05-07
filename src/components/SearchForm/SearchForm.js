import React from 'react';
import { StyledSearchForm } from './styles.js';

const SearchForm = ({ searchTerm, handleSearchChange, handleSubmit }) => {
  return (
    <StyledSearchForm onSubmit={handleSubmit}>
      <label className="user-search__input-label" htmlFor="user-search__input">
        Search for user
      </label>
      <input
        className="user-search__input"
        id="user-search__input"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </StyledSearchForm>
  );
};

export default SearchForm;
