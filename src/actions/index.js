/* eslint-disable import/prefer-default-export */
export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const initialLocation = (payload) => ({
  type: 'INITIAL_LOCATION',
  payload,
});

export const destinyLocation = (payload) => ({
  type: 'DESTINY_LOCATION',
  payload,
});
