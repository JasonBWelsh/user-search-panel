import React from 'react';
import { StyledUser } from './styles.js';

const User = ({ firstName, lastName, email, cell, image }) => {
  return (
    <StyledUser>
      <div className="user-image__container">
        <img src={image} alt={`${firstName} ${lastName}`} />
      </div>
      <div className="user-details__container">
        <h3 className="user-name">{`${firstName} ${lastName}`}</h3>
        <span>{cell}</span>
        <span>{email}</span>
      </div>
    </StyledUser>
  );
};

export default User;
