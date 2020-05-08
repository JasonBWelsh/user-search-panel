import React from 'react';
import { StyledRecentItem } from './styles.js';

const RecentItem = ({ firstName, lastName, id }) => {
  return (
    <StyledRecentItem id={id}>
      <span>{firstName}</span> <span>{lastName}</span>
    </StyledRecentItem>
  );
};

export default RecentItem;
