import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import CardItem from './CardItem.jsx';

function CardSearch() {
  const dispatch = useDispatch();
  const searchData = useSelector(store => store.searchData);
  const [searchInput, setSearchInput] = useState('');
  const [searchDisplay, setSearchDisplay] = useState('');

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
    console.log(searchInput);
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
      CardSearch Component
      <form id="searchForm" onSubmit={event => handleFormSubmit(event)}>
        <input className="searchBar" type="text" onChange={event => handleSearchChange(event)} />
        <input type="submit" />
      </form>
      <h3>Search Results for: {searchDisplay}</h3>
      {
        searchData.map(card => (
          <div>
            <CardItem
              card={card}
            />
          </div>
        ))
      }


    </div>
  )
}

export default CardSearch;