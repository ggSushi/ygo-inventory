import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function CardItem({ card }) {
  const [cardColor, setCardColor] = useState('#FFE09E')

  useEffect(() => {
    if (card.type === 'Normal Monster') {
      setCardColor('#FFE09E');
    } else if (card.type === 'Fusion Monster') {
      setCardColor('#7972AE');
    } else if (card.type === 'Synchro Monster') {
      setCardColor('#E7E4DF');
    } else if (card.type === 'Ritual Monster') {
      setCardColor('#8AA2CB')
    } else if (card.type === 'Link Monster') {
      setCardColor('#1A4687')
    } else if (card.type === 'Xyz Monster') {
      setCardColor('#292D2D')
    } else if (card.type === 'Pendulum Monster') {
      setCardColor('#95A299')
    } else if (card.type === 'Spell Card') {
      setCardColor('#208685')
    } else if (card.type === 'Trap Card') {
      setCardColor('#D187A8')
    } else {
      setCardColor('transparent')
    }
  }, [])

  return (
    <div>
      <ul>
        <li>Name: {card.name}</li>
        <li>Type: {card.type}</li>
      </ul>
    </div>
  )
}

export default CardItem;