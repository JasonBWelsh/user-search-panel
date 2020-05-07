import styled from 'styled-components';

export const StyledUser = styled.div`
  margin: 0.5rem 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 3px;
  display: flex;
  justify-content: flex-start;
  font-size: 12px;
  position: relative; // for add button
  color: #767676;
  transition: all 0.3s ease;
  @media (min-width: 768px) {
    width: 47%;
  }

  .user-image__container,
  .user-details__container {
    padding: 0.5rem;
    display: flex;
  }

  .user-image__container {
    justify-content: center;
    align-items: center;

    .user-image {
      border-radius: 50%;
      border: 1px solid #ccc;
    }
  }

  .user-details__container {
    flex-direction: column;

    .user-name {
      margin: 0;
      color: #323232;
      transition: all 0.3s ease;
    }

    span {
      margin-top: 3px;
    }
  }

  .user-add__button {
    border: none;
    padding: 0;
    background: transparent;
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;

    svg path {
      fill: #ccc;
      transition: all 0.3s ease;
    }
  }

  // hover styles
  &:hover {
    background: #dfe;
  }

  &:hover .user-name {
    color: #7575ff;
  }

  &:hover svg path {
    fill: #7575ff;
  }
`;
