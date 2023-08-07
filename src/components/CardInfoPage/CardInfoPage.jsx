import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function CardInfoPage() {
  const cardInfo = useSelector(store => store.cardClickInfo);
  const quantity = useSelector(store => store.quantity);
  const history = useHistory();
  const dispatch = useDispatch();

  const backToSearch = () => {
    dispatch({ type: 'RESET_QUANTITY' })
    history.push('/home')
  }

  const quantityChange = (e) => {
    dispatch({ type: 'SET_QUANTITY', payload: e.target.value });
  }

  useEffect(() => {
    console.log('hasProperty?', cardInfo.hasOwnProperty('card_sets'))
  }, [])

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
        <form >
          Add this many cards to your Inventory: <i>{quantity}</i>
          <br />
          <input type="number" placeholder="Enter quantity (e.g. 3)" onChange={(e) => quantityChange(e)} />
          <input type="submit" value="Add to Inventory" />
        </form>
      </div>
    </div>
  )
}

export default CardInfoPage;