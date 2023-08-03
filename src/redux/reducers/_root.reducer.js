import { combineReducers } from 'redux';

const testReducer = (state = 'ggKaiba', action) => {
  switch (action.type) {
    case 'SET_TEST_NAME':
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
  testReducer,
});

export default rootReducer;