import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function CardInfoPage() {
  const cardInfo = useSelector(store => store.cardClickInfo)
  const history = useHistory();

  const backToSearch = () => {
    history.push('/home')
  }
  return (
    <div>
      <h2>{cardInfo.name}</h2>
      <hr />
      <div>
        <div>
          <b>ID:</b> {cardInfo.id}
          <br />
          <b>Type:</b> {cardInfo.type}
        </div>
        <div>
          <p>
            Description:
            <br />
            {cardInfo.desc}
          </p>

        </div>
      </div>
      <button onClick={backToSearch}>Back to Search</button>
      <div>
        <form >
          Add this card to your Inventory.
          <br />
          <input type="number" placeholder="Enter quantity (e.g. 3)" />
          <input type="submit" value="Add to Inventory" />
        </form>
      </div>
    </div>
  )
}

export default CardInfoPage;