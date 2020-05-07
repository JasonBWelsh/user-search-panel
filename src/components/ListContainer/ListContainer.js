import React from 'react';
import { StyledListContainer } from './styles.js';
import User from '../User/User.js';

const ListContainer = ({ users, isLoading, isError, handleAddRecentUser }) => {
  return (
    <StyledListContainer>
      {isError && <div>ERROR!!!!!</div>}
      {isLoading ? (
        <div>Loading users...</div>
      ) : (
        users.map((user) => (
          <User
            key={user.login.salt}
            id={user.login.salt}
            firstName={user.name.first}
            lastName={user.name.last}
            email={user.email}
            cell={user.cell}
            image={user.picture.thumbnail}
            handleAddRecentUser={handleAddRecentUser}
          />
        ))
      )}
    </StyledListContainer>
  );
};

export default ListContainer;
