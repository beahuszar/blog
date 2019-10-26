export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      // once a new user is fetched, it is added to the store
      // while someone is viewing this page, we have access to all these details
      // and use them freely
      return [...state, action.payload];
    default:
      return state;
  };
};