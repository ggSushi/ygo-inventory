import React from 'react';
import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InventoryItem from './InventoryItem.jsx'

function Inventory() {
  const dispatch = useDispatch();
  const history = useHistory();
  const inventoryAll = useSelector(store => store.invGetAll);
  const [searchInput, setSearchInput] = useState('');
  const [filter, setFilter] = useState('Name');

  const getCardInventory = () => {
    dispatch({ type: 'FETCH_INVENTORY_ALL'})
    console.log('OK GET')
  }

  const handleCardClick = (card) => {
    dispatch({type: 'SET_CARD_INFO', payload: card});
    console.log(`inventory card is clicked! ${card.id}`);
    
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  }

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  }

  const resetSearch = () => {
    dispatch({type: 'FETCH_INVENTORY_ALL'})
    setSearchInput('')
  }

  const handleSearchSubmit = (e, filter) => {
    e.preventDefault();
    if (filter === 'Name') {
      dispatch({type: 'FETCH_SEARCH_NAME', payload: searchInput})
    } else if (filter === 'Card ID') {
      dispatch({type: 'FETCH_SEARCH_ID', payload: searchInput})
    } 
    //!!! Can't get the Description filter working just yet. -gd
    // else if (filter === 'Description') {
    //   dispatch({type: 'FETCH_SEARCH_DESCRIPTION', payload :searchInput})
    // } 
    else {
      dispatch({ type: 'FETCH_INVENTORY_ALL'})
      console.log(`No Filter applied, Mt. ggKaiba.`)
    }
    
  }

  useEffect(() => {
    getCardInventory();
  }, [])

  return (
    <div>
      <div>
        Search Inventory database ||
        Search by:
        <select onChange={e => handleFilterChange(e)}>
          <option>Name</option>
          <option>Card ID</option>
          {/* <option>Description</option> */}
        </select>
        <form onSubmit={e => handleSearchSubmit(e, filter)}>
          <input type="text" onChange={e => handleInputChange(e)} placeholder="e.g. 'golden' or 'rule'" value={searchInput}/>
          <input type="submit" />
        </form>
        <button onClick={resetSearch}>Reset Search</button>
      </div>
      <Box>
        Search Results by {filter}:
        <Grid container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {
            inventoryAll.map(card => (
              <Grid item xs={2} sm={2} md={3} key={card.id} onClick={() => handleCardClick(card)}>
                <InventoryItem card={card}/>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </div>
  )
}

export default Inventory;