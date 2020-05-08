import React from 'react';
import { StyledRecentItem } from './styles.js';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

const RecentItem = ({
  firstName,
  lastName,
  id,
  handleRecentUserClick,
  handleRecentUsersDelete,
}) => {
  return (
    <StyledRecentItem id={id}>
      <button
        className="recent-name__button"
        onClick={() => handleRecentUserClick(firstName)}
      >{`${firstName} ${lastName}`}</button>
      <button
        className="recent-remove__button"
        onClick={() => handleRecentUsersDelete(id)}
      >
        <DeleteIcon height="10px" width="10px" />
      </button>
    </StyledRecentItem>
  );
};

export default RecentItem;
