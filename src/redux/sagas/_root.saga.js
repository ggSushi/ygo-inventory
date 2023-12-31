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

function* fetchInventoryAtId(action) {
  try {
    let id = action.payload;
    const cardAtId = yield axios.get(`/inventory/databaseSearch/${id}`);
    yield put({ type: 'SET_INV_CARD', payload: cardAtId.data});
  } catch (error) {
    console.log(`Error in GET cardAtId ${error}`);
    alert(`Can't pull cardAtId, Mr. ggKaiba`);
  }
}

function* fetchTotalQuantity() {
  try {
    const totalCards = yield axios.get('/inventory/totalCards');
    yield put({type: 'SET_TOTAL_CARDS', payload: totalCards.data});
  } catch (error) {
    console.log(`Error in GET totalCards: ${error}`);
    alert(`Can't pull total cards, Mr. ggKaiba`);
  }
};

function* searchNameInv(action) {
  try {
    let name = action.payload
    const searchCard = yield axios.get(`/inventory/searchName/${name}`);
    yield put({ type: 'SET_INVENTORY_ALL', payload: searchCard.data })
  } catch (error) {
    console.log(`Error in Search Card GET: ${error}`);
    alert(`Search is incomplete, Mr. ggKaiba`)
  }
}

function* searchIdInv(action) {
  try {
    let id = action.payload
    const searchCard = yield axios.get(`/inventory/searchId/${id}`);
    yield put({ type: 'SET_INVENTORY_ALL', payload: searchCard.data })
  } catch (error) {
    console.log(`Error in Search Card GET: ${error}`);
    alert(`Search is incomplete, Mr. ggKaiba`)
  }
}

function* searchDescInv(action) {
  try {
    let input = action.payload
    const searchCard = yield axios.get(`/inventory/searchDesc/${input}`);
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
    yield takeLatest('FETCH_SEARCH_NAME', searchNameInv),
    yield takeLatest('FETCH_SEARCH_ID', searchIdInv),
    yield takeEvery('FETCH_SEARCH_DESCRIPTION', searchDescInv),
    yield takeLatest('FETCH_TOTAL_CARDS', fetchTotalQuantity),
    yield takeLatest('FETCH_INV_CARD', fetchInventoryAtId),
    
  ]);
}

export default rootSaga;