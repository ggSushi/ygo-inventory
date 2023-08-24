import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function CardInfoPage() {
  const cardInfo = useSelector(store => store.cardClickInfo);
  const quantity = useSelector(store => store.quantity);
  const location = useSelector(store => store.location)
  const [numbDisplay, setNumbDisplay] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const backToSearch = () => {
    dispatch({ type: 'RESET_QUANTITY' })
    history.push('/api-search')
  }

  const quantityChange = (e) => {
    dispatch({ type: 'SET_QUANTITY', payload: e.target.value });
    setNumbDisplay(e.target.value);
  }

  const locationChange = (e) => {
    dispatch({ type: 'SET_LOCATION', payload: e.target.value})
    // console.log(location)
  }

  useEffect(() => {
    // This line of code checks to see if objects have the specified property and returns a boolean value.
    // console.log('hasProperty?', cardInfo.hasOwnProperty('card_sets'))
  }, [])

  const handleSubmitToInv = (e) => {
    e.preventDefault();
    if (quantity === '' || quantity === undefined || cardInfo.name === '' || cardInfo.name === undefined || numbDisplay === '' || numbDisplay === undefined) {
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
        storage_location: location
      }).then((response) => {
        alert(`Successfully added ${cardInfo.name} to Inventory!`);
        console.log(`Added ${cardInfo.name} to inventory.`);
      }).catch((error) => {
        console.log(`Error in axios addToInv ${error}`);
        alert(`Couldn't add card into inventory, Mr. ggKaiba.`);
      });
    }
    dispatch({ type: 'RESET_QUANTITY' });
    setNumbDisplay('');
  }

  return (
    <div>
      <h2>{cardInfo.name}
        <br />
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
        <table id="pricing-table">
          <thead>
            <tr>
              <th>Source</th>
              <th>Current Price</th>
            </tr>
          </thead>
          <tbody>
            {
            cardInfo.hasOwnProperty('card_prices') === false ? (
              <tr>
                <td>No Source</td>
                <td>N/A</td>
              </tr>
            ) : (
              <div id="extra-info">
                {
                  cardInfo.card_prices.map(set => (
                    <div key={set.id}>
                      <tr>
                      <td>General Market</td>
                      <td><i>{set.cardmarket_price}</i></td>
                      </tr>
                      <tr>
                      <td>TCGPlayer</td>
                      <td><i>{set.tcgplayer_price}</i></td>
                      </tr>
                      <tr>
                      <td>eBay</td>
                      <td><i>{set.ebay_price}</i></td>
                      </tr>
                      <tr>
                      <td>Amazon</td>
                      <td><i>{set.amazon_price}</i></td>
                      </tr>
                      <tr>
                      <td>CoolStuffInc.com</td>
                      <td><i>{set.coolstuffinc_price}</i></td>
                      </tr>
                    </div>
                  ))
                }
              </div>
            )
          }
            
          </tbody>
        </table>

      </div>
      <hr />
      <button onClick={backToSearch}>Back to Search</button>
      <div>
        <form id="inventory-form" onSubmit={(event) => handleSubmitToInv(event)}>
          Add this many cards to your Inventory in your {location}: <i>{quantity}</i>
          <br />
          <input type="number" placeholder="Enter quantity (e.g. 3)" onChange={(e) => quantityChange(e)} value={numbDisplay} />
          <select onChange={(e) => locationChange(e)}>
            <option value="cardBoxS1">Card Box S1</option>
            <option value="cardBoxS2">Card Box S2</option>
            <option value="cardBoxT1">Card Box T1</option>
            <option value="cardBoxT2">Card Box T2 (YGO Small Box)</option>
            <option value="cardBoxM1">Card Box M1 (Big Box)</option>
            <option value="collectorBinder1">Collector's Binder 1 (Pink)</option>
            <option value="collectorBinder2">Collector's Binder 2 (Gray)</option>
            <option value="binder1">Binder 1 (White)</option>
            <option value="binder2">Binder 2 (Black)</option>
            <option value="singleBinder1">Single Binder 1 (Red)</option>
            <option value="singleBinder2">Single Binder 2 (White)</option>
            <option value="singleBinder3">Single Binder 3 (Blue)</option>
            <option value="mySingleBinder1">Personal Single Binder 1 (Black)</option>
            <option value="other">Other (Change Later)</option>
          </select>
          <input type="submit" value="Add to Inventory" />
        </form>
      </div>
    </div>
  )
}

export default CardInfoPage;