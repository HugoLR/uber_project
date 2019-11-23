const initialState = {
    userLocation: null,
    userLocationCoordenates: null,
    directions: null,
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
      case 'INITIAL_LOCATION_COORDENATES':
        return {
          ...state,
          userLocationCoordenates: action.payload,
        };

      case 'DIRECTIONS':
      return {
        ...state,
        directions: action.payload,
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