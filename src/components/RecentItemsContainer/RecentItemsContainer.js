import React from 'react';
import { StyledRecentItemsContainer } from './styles.js';

const RecentItemsContainer = ({ recentUsers, handleClearRecentSearches }) => {
  console.log('test recentUsers::', recentUsers === true);
  return (
    <StyledRecentItemsContainer>
      <button type="button" onClick={handleClearRecentSearches}>
        {recentUsers.length ? 'Clear Items' : 'No Recent Items'}
      </button>
    </StyledRecentItemsContainer>
  );
};

export default RecentItemsContainer;
