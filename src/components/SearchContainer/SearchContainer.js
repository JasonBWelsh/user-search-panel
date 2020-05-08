import React from 'react';
import { StyledSearchContainer } from './styles.js';
import SearchForm from '../SearchForm/SearchForm.js';
import RecentItemsContainer from '../RecentItemsContainer/RecentItemsContainer.js';

const SearchContainer = ({
  searchTerm,
  handleSearchChange,
  handleSubmit,
  recentUsers,
  handleClearRecentSearches,
  handleRecentUserClick,
  handleRecentUsersDelete,
}) => {
  return (
    <StyledSearchContainer>
      <SearchForm
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        handleSubmit={handleSubmit}
      />
      <RecentItemsContainer
        recentUsers={recentUsers}
        handleClearRecentSearches={handleClearRecentSearches}
        handleRecentUserClick={handleRecentUserClick}
        handleRecentUsersDelete={handleRecentUsersDelete}
      />
    </StyledSearchContainer>
  );
};

export default SearchContainer;
