import { combineReducers } from 'redux';

const searchData = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SEARCH_DATA':
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  //* reducers go here.
  // If there are no existing reducers, console log 
  // will show error that states there are no 
  // reducers in store.
  searchData,
});

export default rootReducer;