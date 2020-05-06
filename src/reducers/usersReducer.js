export const usersReducer = (state, action) => {
  console.log('usersReducer');
  switch (action.type) {
    case 'FETCH_USERS_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_USERS_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
