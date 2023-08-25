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
        {
          inventoryAll.map(card => (
            <div key={card.id}>
              <b>{card.card_name}</b> || <i>{card.card_type}</i>
              <br/>
              Location: <b>{card.storage_location}</b> || Quantity: <b>{card.quantity}</b>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Inventory;