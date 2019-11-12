const initialState = {
    userLocation: null,
    destiny: null,
    distanceMatrixService: null,
    rideClass: null
}

export default  (state = initialState, action) => {
    switch (action.type) {
      case 'INITIAL_LOCATION':
        return {
          ...state,
          userLocation: action.payload,
        };
      case 'DESTINY_LOCATION':
        return {
          ...state,
          destiny: action.payload,
        };
      case 'DISTANCE_MATRIX_SERVICE':
        return {
          ...state,
          distanceMatrixService: action.payload,
        };
      case 'RIDE_CLASS':
        return {
          ...state,
          rideClass: action.payload,
        };
      default:
        return state;
    }
};