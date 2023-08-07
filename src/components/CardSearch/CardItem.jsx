import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function CardItem({ card }) {


  return (
    <div>
      Card Data:
      {card.id}
    </div>
  )
}

export default CardItem;