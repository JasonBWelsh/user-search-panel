import React, { useState, useReducer, useEffect } from 'react';
import { usersReducer } from '../../reducers/usersReducer.js';
import axios from 'axios';
import { StyledContainer } from './styles.js';
import SearchContainer from '../SearchContainer/SearchContainer.js';
import ListContainer from '../ListContainer/ListContainer.js';

const API_ENDPOINT = 'https://randomuser.me/api/?results=20';

const Container = () => {
  const [users, dispatchUsers] = useReducer(usersReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    dispatchUsers({ type: 'FETCH_USERS_INIT' });
    const fetchUSerData = async () => {
      try {
        const response = await axios.get(API_ENDPOINT);
        console.log(response);
        dispatchUsers({
          type: 'FETCH_USERS_SUCCESS',
          payload: response.data.results,
        });
      } catch {
        dispatchUsers({ type: 'FETCH_USERS_FAILURE' });
      }
    };
    fetchUSerData();
  }, []);

  return (
    <StyledContainer>
      <div>Container</div>
      <SearchContainer />
      <ListContainer
        users={users.data}
        isLoading={users.isLoading}
        isError={users.isError}
      />
    </StyledContainer>
  );
};

export default Container;
