import { combineReducers } from 'redux';
//* YGOProDeck API reducers
const searchData = (state = [], action) => {
  switch (action.type) {
    case 'SET_SEARCH_DATA':
      return action.payload;
    case 'UNDEFINED_SEARCH':
      return [];
    case 'RESET_SEARCH':
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

const location = (state = '', action) => {
  switch (action.type) {
    case 'SET_LOCATION' :
      return action.payload;
    case 'RESET_LOCATION':
      return '';
    default:
      return state;
  }
}

//* localhost DB reducers
const invGetAll = (state = [], action) => {
  switch (action.type) {
    case 'SET_INVENTORY_ALL':
      return action.payload;
    case 'RESET_INVENTORY_ALL':
      return [];
    default:
      return state;
  }
}

const invCardInfo = (state = [], action) => {
  switch (action.type) {
    case 'SET_INVENTORY_CARD':
      return action.payload;
    case 'RESET_INVENTORY_CARD':
      return [];
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
  location,
  invGetAll,
  invCardInfo,
});

export default rootReducer;