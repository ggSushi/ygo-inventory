import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardItem from './CardItem.jsx';
import './CardStyle.css';


function CardSearch() {
  const dispatch = useDispatch();
  const searchData = useSelector(store => store.searchData);
  const [searchInput, setSearchInput] = useState('');
  const [searchDisplay, setSearchDisplay] = useState('');

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  }

  const handleCardClick = (card) => {
    dispatch({ type: 'SET_CARD_INFO', payload: card });
    console.log(`card is clicked! ${card.id}`)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setSearchDisplay('');
    setSearchDisplay(searchInput);

    // Axios request
    if (searchInput === undefined || searchInput === '') {
      alert('Please enter something in the search');
      dispatch({ type: 'UNDEFINED_SEARCH' })
      return;
    } else {
      axios.post(`/search`, {
        value: searchInput
      }).then(response => {
        console.log(`response OK: ${response.data}`);
        dispatch({ type: 'SET_SEARCH_DATA', payload: response.data.data })
      }).catch((error) => {
        console.log(`Error in CardSearch POST: ${error}`);
        alert('Something is wrong, Mr. ggKaiba');
      });
    }
  }

  return (
    <div>
      Search YGOProDeck database:
      <form id="searchForm" onSubmit={event => handleFormSubmit(event)}>
        <input className="searchBar" type="text" onChange={event => handleSearchChange(event)} />
        <input type="submit" />
      </form>

      <h3>Search Results for: {searchDisplay}</h3>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {
            searchData.map(card => (
              <Grid item xs={2} sm={3} key={card.id} onClick={() => handleCardClick(card)}>
                <CardItem
                  card={card}
                />
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </div>
  )
}

export default CardSearch;