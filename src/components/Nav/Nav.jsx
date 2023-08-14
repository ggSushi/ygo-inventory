import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';



function Nav() {

  return (

    <div className="nav">
      <h1>Yu-Gi-Oh! Personal Inventory Database</h1>
      <div>
        <Link className="navLink" to='/home'>
          Home
        </Link>
        <Link className="navLink" to='/api-search'>
          Search
        </Link>
        <Link className="navLink" to='/card-inventory'>
          Inventory
        </Link>
        <Link className="navLink" to='/my-decks'>
          My Decks
        </Link>
        <Link className="navLink" to='/concept-decks'>
          Concept Decks
        </Link>
      </div>
    </div>
  )
}

export default Nav;