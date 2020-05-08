import React, { useState, useReducer, useEffect } from 'react';
import { usersReducer } from '../../reducers/usersReducer.js';
import axios from 'axios';
import { StyledContainer } from './styles.js';
import SearchContainer from '../SearchContainer/SearchContainer.js';
import ListContainer from '../ListContainer/ListContainer.js';

const API_ENDPOINT = 'https://randomuser.me/api/?results=20';

const Container = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [users, dispatchUsers] = useReducer(usersReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  const [recentUsers, setRecentUsers] = useState([]);

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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log('handleSearch', event.target.value, searchTerm);
  };

  const handleRecentUserClick = (userName) => {
    // get user name
    // set searchTerm so list is filtered by selected name
    console.log('DRD-13 `handleRecentUserClick` log `userName`', userName);
    setSearchTerm(userName);
  };

  const handleRecentUsersDelete = (id) => {
    // get id of clicked user
    // filter setRecentUSers removing user with id
    // clear search bar
    console.log('DRD-13 `handleREcentUSersDelete` log `id`:::', id);
    setRecentUsers(recentUsers.filter((user) => user.login.salt !== id)); // user.login.salt used for unique ID throughout app
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClearRecentSearches = () => {
    setRecentUsers([]);
  };

  const handleAddRecentUser = (id) => {
    const selectedUser = users.data.filter((user) => user.login.salt === id)[0];
    const trimmedRecentUsersList = [...recentUsers];

    let isPresent = false;

    trimmedRecentUsersList.forEach((user) => {
      if (user.login.salt === selectedUser.login.salt) {
        isPresent = true;
      }
    });

    if (trimmedRecentUsersList.length === 5 && !isPresent) {
      trimmedRecentUsersList.shift();
      setRecentUsers([...trimmedRecentUsersList, selectedUser]);
    } else if (!isPresent) {
      setRecentUsers([...trimmedRecentUsersList, selectedUser]);
    }
  };

  return (
    <StyledContainer>
      <SearchContainer
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        handleSubmit={handleSubmit}
        recentUsers={recentUsers}
        handleClearRecentSearches={handleClearRecentSearches}
        handleRecentUserClick={handleRecentUserClick}
        handleRecentUsersDelete={handleRecentUsersDelete}
      />
      <ListContainer
        users={users.data.filter(
          (user) =>
            user.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.name.last.toLowerCase().includes(searchTerm.toLowerCase())
        )}
        isLoading={users.isLoading}
        isError={users.isError}
        handleAddRecentUser={handleAddRecentUser}
      />
    </StyledContainer>
  );
};

export default Container;
