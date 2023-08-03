import React from 'react';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';

function CardSearch() {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('test');
  
  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
    console.log(searchInput);
  }
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Axios request
    axios.post(`/search`, {
      value: searchInput
    }).then(response => {
      console.log(`response OK: ${response.data}`);
    }).catch((error) => {
      console.log(`Error in CardSearch POST: ${error}`);
      alert('Something is wrong, Mr. ggKaiba');
    })
  }
  
  return (
    <div>
      CardSearch Component
      <form id="searchForm" onSubmit={event => handleFormSubmit(event)}>
        <input className="searchBar" type="text" onChange={event => handleSearchChange(event)}/>
        <input type="submit"/>
      </form>
      
    </div>
  )
}

export default CardSearch;