import { all } from 'redux-saga/effects';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchInventory() {
  try {
    const allInventory = yield axios.get('/inventory/getAll');
    yield put({ type: 'SET_INVENTORY_ALL', payload: allInventory.data })
  } catch (error) {
    console.log(`Error in GET Inventory All: ${error}`);
    alert(`Something went wrong, Mr. ggKaiba.`);
  }
};

function* rootSaga() {
  yield all([
    // sagas go here
    yield takeEvery('FETCH_INVENTORY_ALL', fetchInventory)
  ]);
}

export default rootSaga;