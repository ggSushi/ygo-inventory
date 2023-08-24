import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Inventory() {
  const dispatch = useDispatch();
  const inventoryAll = useSelector(store => store.invGetAll);

  const getCardInventory = () => {
    dispatch({ type: 'FETCH_INVENTORY_ALL'})
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
      <div>
        Search Results:
        {JSON.stringify(inventoryAll)}
      </div>
    </div>
  )
}

export default Inventory;