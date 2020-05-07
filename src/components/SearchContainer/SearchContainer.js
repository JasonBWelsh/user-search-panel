import React from 'react';
import { StyledSearchContainer } from './styles.js';
import SearchForm from '../SearchForm/SearchForm.js';

const SearchContainer = ({ searchTerm, handleSearchChange, handleSubmit }) => {
  return (
    <StyledSearchContainer>
      <SearchForm
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        handleSubmit={handleSubmit}
      />
    </StyledSearchContainer>
  );
};

export default SearchContainer;
