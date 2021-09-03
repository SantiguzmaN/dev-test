export const apiReducer = (state, action) => {
  switch (action.type) {
  case 'DOTACIONES':
    return {
      ...state,
    };
  default:
    return state;
  }
};