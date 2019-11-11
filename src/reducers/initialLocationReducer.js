const initialState = {
    userLocation: null,
    destiny: null
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
      default:
        return state;
    }
};