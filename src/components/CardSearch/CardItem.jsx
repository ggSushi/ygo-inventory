import React from 'react';
import { useState, useEffect } from 'react';
import './CardStyle.css';

function CardItem({ card }) {
  const [cardColor, setCardColor] = useState('transparent');
  const [textColor, setTextColor] = useState('black');
  const [gradientFromColor, setGradientFromColor] = useState('transparent');
  const [gradientToColor, setGradientToColor] = useState('transparent');

  const colorChange = () => {
    if (card.type === 'Normal Monster' || card.type === 'Gemini Monster') {
      setCardColor('#FFE09E');
    } else if (card.type === 'Toon Monster' || card.type === 'Spirit Monster' || card.type === 'Union Effect Monster' || card.type === 'Effect Monster' || card.type === 'Flip Effect Monster'  || card.type === 'Tuner Monster') {
      setCardColor('#B9855D');
      setTextColor('white');
    } else if (card.type === 'Fusion Monster') {
      setCardColor('#7972AE');
      setTextColor('white');
    } else if (card.type === 'Synchro Monster') {
      setCardColor('white');
    } else if (card.type === 'Ritual Effect Monster' || card.type === 'Ritual Monster') {
      setCardColor('#0C28C0');
      setTextColor('white');
    } else if (card.type === 'Link Monster' || card.type === 'Skill Card') {
      setCardColor('#0B63F6');
      setTextColor('white');
    } else if (card.type === 'XYZ Monster') {
      setCardColor('#292D2D');
      setTextColor('white');
    } else if (card.type === 'Spell Card') {
      setCardColor('#208685');
      setTextColor('white');
    } else if (card.type === 'Trap Card') {
      setCardColor('#D187A8');
      setTextColor('white');
    } else if (card.type === 'Token') {
      setCardColor('#746B78');
      setTextColor('white');
    } else if (card.type === 'Pendulum Monster' || card.type === 'Pendulum Normal Monster' || card.type === 'Pendulum Effect Monster' || card.type === 'Pendulum Tuner Effect Monster') {
      setTextColor('white');
      setGradientFromColor('#B9855D');
      setGradientToColor('#208685');
    } else if (card.type === 'Pendulum Fusion Monster') {
      setTextColor('white');
      setGradientFromColor('');
      setGradientToColor('#208685');
    } else if (card.type === 'XYZ Pendulum Effect Monster') {
      setTextColor('white');
      setGradientFromColor('#292D2D');
      setGradientToColor('#208685');
    } else if (card.type === 'Pendulum Effect Ritual Monster') {
      setTextColor('white');
      setGradientFromColor('#0C28C0');
      setGradientToColor('#208685');
    } else if (card.type === 'Synchro Pendulum Effect Monster' ) {
      setTextColor('black');
      setGradientFromColor('white');
      setGradientToColor('#208685');
    } else if (card.type === 'Pendulum Effect Fusion Monster' ) {
      setTextColor('white');
      setGradientFromColor('#7972AE');
      setGradientToColor('#208685');
    } else {
      setCardColor('transparent');
      setTextColor('black');
      setGradientFromColor('transparent');
      setGradientToColor('transparent');
    }
  }

  useEffect(() => {
    colorChange();
  }, [])

  return (
    <div id="card-item" 
    style={{ backgroundColor: cardColor, 
    color: textColor, 
    backgroundImage: `linear-gradient(0deg, ${gradientToColor}, ${gradientFromColor})`}}>
      <h3><center>{card.name}</center></h3>
      <ul>
        <li><b>Type:</b> <i>{card.type}</i></li>
        <li><b>ID:</b> {card.id}</li>
      </ul>
    </div>
  )
}

export default CardItem;