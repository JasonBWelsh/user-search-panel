import React from 'react';
import { StyledRecentItemsContainer } from './styles.js';
import RecentItem from '../RecentItem/RecentItem.js';

const RecentItemsContainer = ({ recentUsers, handleClearRecentSearches }) => {
  return (
    <StyledRecentItemsContainer>
      <button
        type="button"
        className={
          recentUsers.length ? 'button__list-populated' : 'button__list-empty'
        }
        onClick={handleClearRecentSearches}
      >
        {recentUsers.length ? 'Clear Items' : 'No Recent Items'}
      </button>
      {recentUsers.map((user, index) => (
        <RecentItem
          key={user.login.salt}
          id={user.login.salt}
          firstName={user.name.first}
          lastName={user.name.last}
          className={`recent-item__${index.toString()}`}
        />
      ))}
    </StyledRecentItemsContainer>
  );
};

export default RecentItemsContainer;
