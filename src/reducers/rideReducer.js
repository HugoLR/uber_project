const initialState = {
    actualRide: null,
    userRides: null,
}

export default  (state = initialState, action) => {
    switch (action.type) {
      case 'ACTUAL_RIDE':
        return {
          ...state,
          actualRide: action.payload,
        };
      case 'USER_RIDES':
        return {
          ...state,
          userRides: action.payload,
        };
        default:
        return state;
    }
};