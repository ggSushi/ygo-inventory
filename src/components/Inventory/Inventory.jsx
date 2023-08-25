import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InventoryItem from './InventoryItem.jsx'

function Inventory() {
  const dispatch = useDispatch();
  const inventoryAll = useSelector(store => store.invGetAll);

  const getCardInventory = () => {
    dispatch({ type: 'FETCH_INVENTORY_ALL' })
    console.log('OK GET')
  }

  useEffect(() => {
    getCardInventory();
  }, [])

  return (
    <div>
      <div>
        Search Inventory database:
        <form>
          <input type="text" placeholder="e.g. 'golden' or 'rule'" />
          <input type="submit" />
        </form>
      </div>
      <Box>
        Search Results:
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