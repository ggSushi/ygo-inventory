import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function CardItem({ card }) {
  const [cardColor, setCardColor] = useState('');
  const [textColor, setTextColor] = useState('black');

  const colorChange = () => {
    if (card.type === 'Normal Monster' || card.type === 'Gemini Monster') {
      setCardColor('#FFE09E');
    } else if (card.type === 'Toon Monster' || card.type === 'Effect Monster'  || card.type === 'Tuner Monster') {
      setCardColor('#B9855D');
      setTextColor('white');
    } else if (card.type === 'Fusion Monster') {
      setCardColor('#7972AE');
      setTextColor('white');
    } else if (card.type === 'Synchro Monster') {
      setCardColor('white');
    } else if (card.type === 'Ritual Effect Monster' || card.type === 'Ritual Monster') {
      setCardColor('#8AA2CB');
      setTextColor('white');
    } else if (card.type === 'Link Monster' || card.type === 'Skill Card') {
      setCardColor('#1A4687');
      setTextColor('white');
    } else if (card.type === 'XYZ Monster') {
      setCardColor('#292D2D');
      setTextColor('white');
    } else if (card.type === 'Pendulum Monster') {
      setCardColor('#95A299');
      setTextColor('white');
    } else if (card.type === 'Spell Card') {
      setCardColor('#208685');
      setTextColor('white');
    } else if (card.type === 'Trap Card') {
      setCardColor('#D187A8');
      setTextColor('white');
    } else {
      setCardColor('transparent');
      setTextColor('black');
    }
  }

  useEffect(() => {
    colorChange();
  }, [])

  return (
    <div style={{ backgroundColor: cardColor, color: textColor}}>
      <ul>
        <li>Name: {card.name}</li>
        <li>Type: {card.type}</li>
      </ul>
    </div>
  )
}

export default CardItem;