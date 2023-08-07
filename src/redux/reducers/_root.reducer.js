import { combineReducers } from 'redux';

const searchData = (state = [], action) => {
  switch (action.type) {
    case 'SET_SEARCH_DATA':
      return action.payload;
    case 'UNDEFINED_SEARCH':
      return [];
    default:
      return state;
  }
}

const cardClickInfo = (state = [], action) => {
  switch (action.type) {
    case 'SET_CARD_INFO':
      return action.payload;
    default:
      return state;
  }
}

const quantity = (state = 0, action) => {
  switch (action.type) {
    case 'SET_QUANTITY':
      return action.payload;
    case 'RESET_QUANTITY':
      return 0;
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
  cardClickInfo,
  quantity,
});

export default rootReducer;