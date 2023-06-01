import { createAction } from '@reduxjs/toolkit';

export const setLoggedIn = createAction('login/SET_LOGGED_IN', (isLoggedIn) => {
  return {
    payload: isLoggedIn,
  };
});
