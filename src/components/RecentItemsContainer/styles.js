import styled from 'styled-components';

export const StyledRecentItemsContainer = styled.div`
  padding: 1rem 0 0.5rem 0;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: flex-start; */

  button {
    margin-right: 10px;
    margin-bottom: 5px;
    border: none;
    border-radius: 3px;
    padding: 10px;
    cursor: pointer;

    &.button__list-populated {
      color: #fff;
      background: #8080ff;
    }

    &.button__list-empty {
      color: #767676;
      background: #dbffdb;
    }
  }
`;
