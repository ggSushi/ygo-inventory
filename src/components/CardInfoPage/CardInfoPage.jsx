import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function CardInfoPage() {
  const cardInfo = useSelector(store => store.cardClickInfo);
  const quantity = useSelector(store => store.quantity);
  const [numbDisplay, setNumbDisplay] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const backToSearch = () => {
    dispatch({ type: 'RESET_QUANTITY' })
    history.push('/home')
  }

  const quantityChange = (e) => {
    dispatch({ type: 'SET_QUANTITY', payload: e.target.value });
    setNumbDisplay(e.target.value);
  }

  useEffect(() => {
    // This line of code checks to see if objects have the specified property and returns a boolean value.
    console.log('hasProperty?', cardInfo.hasOwnProperty('card_sets'))
  }, [])

  const handleSubmitToInv = (e) => {
    e.preventDefault();
    if (quantity === '' || quantity === undefined) {
      alert(`Please enter a valid quantity into Inventory.`);
      return;
    } else {
      axios.post(`/inventory/addToInv`, {
        name: cardInfo.name,
        id: cardInfo.id,
        type: cardInfo.type,
        frameType: cardInfo.frameType,
        desc: cardInfo.desc,
        atk: cardInfo.atk,
        def: cardInfo.def,
        level: cardInfo.level,
        race: cardInfo.race,
        attribute: cardInfo.attribute,
        card_sets: cardInfo.card_sets,
        card_images: cardInfo.card_images,
        quantity: quantity,
        storage_location: 'inventory'
      }).then((response) => {
        alert(`Successfully added ${cardInfo.name} to Inventory!`);
        console.log(`Added ${cardInfo.name} to inventory.`);
      }).catch((error) => {
        console.log(`Error in axios addToInv ${error}`);
        alert(`Couldn't add card into inventory, Mr. ggKaiba.`);
      });
    }
    dispatch({type: 'RESET_QUANTITY'});
    setNumbDisplay('');
  }

  return (
    <div>
      <h2>{cardInfo.name}
      <br/>
        {
          cardInfo.type === 'Spell Card' || cardInfo.type === 'Trap Card' ? (
            <>
            </>
          ) : (
            <sub>
              Level/Rank {cardInfo.level}
            </sub>
          )
        }
      </h2>
      <hr />
      <div>
        <div id="initial-info">
          <b>ID:</b> {cardInfo.id}
          <br />
          <b>Type:</b> {cardInfo.type}
        </div>
        <div id="main-info">
          <p>
            <b>Description:</b>
            <br />
            {cardInfo.desc}
          </p>
          {
            cardInfo.type === 'Spell Card' || cardInfo.type === 'Trap Card' || cardInfo.type === 'Skill Card' ? (
              <div></div>
            ) : (
              <div>
                <b>ATK:</b> {cardInfo.atk}
                <b>DEF:</b> {cardInfo.def}
              </div>
            )
          }
        </div>
        {
          cardInfo.hasOwnProperty('card_sets') === false ? (
            <i>Card Sets are not available in this region</i>
          ) : (
            <div id="extra-info">
              <b>Card Sets:</b>
              {
                cardInfo.card_sets.map(set => (
                  <div key={set.id}>
                    {set.set_name} <i>({set.set_code})</i>
                  </div>
                ))
              }
            </div>
          )
        }

      </div>
      <hr/>
      <button onClick={backToSearch}>Back to Search</button>
      <div>
        <form id="inventory-form" onSubmit={(event) => handleSubmitToInv(event)}>
          Add this many cards to your Inventory: <i>{quantity}</i>
          <br />
          <input type="number" placeholder="Enter quantity (e.g. 3)" onChange={(e) => quantityChange(e)} value={numbDisplay}/>
          <input type="submit" value="Add to Inventory" />
        </form>
      </div>
    </div>
  )
}

export default CardInfoPage;