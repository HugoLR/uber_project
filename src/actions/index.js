/* eslint-disable import/prefer-default-export */
export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const initialLocation = (payload) => ({
  type: 'INITIAL_LOCATION',
  payload,
});

export const initialLocationCoordenates = (payload) => ({
  type: 'INITIAL_LOCATION_COORDENATES',
  payload
}) 

export const destinyLocation = (payload) => ({
  type: 'DESTINY_LOCATION',
  payload,
});

export const distanceMatrixService = (payload) => ({
  type: 'DISTANCE_MATRIX_SERVICE',
  payload,
});

export const rideClass = (payload) => ({
  type: 'RIDE_CLASS',
  payload,
});
