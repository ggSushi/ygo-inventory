import React from 'react';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

function CardSearch() {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('test');
  
  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
    console.log(searchInput);
  }
  
  
  return (
    <div>
      CardSearch Component
      <form>
        <input className="searchBar" type="text" onChange={event => handleSearchChange(event)}/>
        <input type="submit"/>
      </form>
      
    </div>
  )
}

export default CardSearch;