import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InventoryItem from './InventoryItem.jsx'

function Inventory() {
  const dispatch = useDispatch();
  const inventoryAll = useSelector(store => store.invGetAll);
  const [searchInput, setSearchInput] = useState('');
  const [filter, setFilter] = useState('Name');

  const getCardInventory = () => {
    dispatch({ type: 'FETCH_INVENTORY_ALL', payload: 'all' })
    console.log('OK GET')
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  }

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'FETCH_INVENTORY_ALL', payload: searchInput})
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
          <option>frameType</option>
          <option>Description</option>
        </select>
        <form onSubmit={e => handleSearchSubmit(e)}>
          <input type="text" onChange={e => handleInputChange(e)} placeholder="e.g. 'golden' or 'rule'" />
          <input type="submit" />
        </form>
      </div>
      <Box>
        Search Results by {filter}:
        <Grid container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {
            inventoryAll.map(card => (
              <Grid item xs={2} sm={2} md={3} key={card.id}>
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