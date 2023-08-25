import { all } from 'redux-saga/effects';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchInventory() {
  try {
    const allInventory = yield axios.get('/inventory/getCards');
    yield put({ type: 'SET_INVENTORY_ALL', payload: allInventory.data })
  } catch (error) {
    console.log(`Error in GET Inventory All: ${error}`);
    alert(`Something went wrong, Mr. ggKaiba.`);
  }
};

function* searchNameInv(action) {
  try {
    let name = action.payload
    const searchCard = yield axios.get(`/inventory/search/${name}`);
    yield put({ type: 'SET_INVENTORY_ALL', payload: searchCard.data })
  } catch (error) {
    console.log(`Error in Search Card GET: ${error}`);
    alert(`Search is incomplete, Mr. ggKaiba`)
  }
}

function* searchNameId(action) {
  try {
    let id = action.payload
    const searchCard = yield axios.get(`/inventory/search/${id}`);
    yield put({ type: 'SET_INVENTORY_ALL', payload: searchCard.data })
  } catch (error) {
    console.log(`Error in Search Card GET: ${error}`);
    alert(`Search is incomplete, Mr. ggKaiba`)
  }
}


//* --- rootSaga Store --- *
function* rootSaga() {
  yield all([
    // sagas go here
    yield takeEvery('FETCH_INVENTORY_ALL', fetchInventory),
    yield takeLatest('FETCH_SEARCH_NAME', searchNameInv)
  ]);
}

export default rootSaga;