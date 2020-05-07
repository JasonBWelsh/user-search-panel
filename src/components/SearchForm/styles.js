import styled from 'styled-components';

export const StyledSearchForm = styled.form`
  border: 1px dotted #eee;
  display: flex;
  flex-direction: column;

  .user-search__input-label {
    font-size: 18px;
    font-weight: bold;
    color: #323232;
    margin-bottom: 0.5rem;
  }

  .user-search__input {
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 0.5rem;
    font-size: 20px;
  }
`;
