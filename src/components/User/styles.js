import styled from 'styled-components';

export const StyledUser = styled.div`
  max-width: 400px;
  border: 1px solid #eee;
  display: flex;
  justify-content: flex-start;

  .user-image__container,
  .user-details__container {
    padding: 0.5rem;
    display: flex;
  }

  .user-image__container {
    justify-content: center;
    align-items: center;
  }

  .user-details__container {
    flex-direction: column;

    .user-name {
      margin: 0;
    }
  }
`;
