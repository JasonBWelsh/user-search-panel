import React from 'react';
import { StyledUser } from './styles.js';
import { ReactComponent as CrossIcon } from '../../icons/cross.svg';

const User = ({
  firstName,
  lastName,
  email,
  cell,
  image,
  handleAddRecentUser,
  id,
}) => {
  return (
    <StyledUser>
      <div className="user-image__container">
        <img
          className="user-image"
          src={image}
          alt={`${firstName} ${lastName}`}
        />
      </div>
      <div className="user-details__container">
        <h3 className="user-name">{`${firstName} ${lastName}`}</h3>
        <span>{cell}</span>
        <span>{email}</span>
      </div>
      <button
        className="user-add__button"
        type="button"
        onClick={() => handleAddRecentUser(id)}
      >
        <CrossIcon height="20px" width="20px" />
      </button>
    </StyledUser>
  );
};

export default User;
