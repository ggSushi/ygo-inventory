import React from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Inventory from '../Inventory/Inventory.jsx';
import CardSearch from '../CardSearch/CardSearch.jsx';
import ConceptDecks from '../ConceptDecks/ConceptDecks.jsx';
import MyDecks from '../MyDecks/MyDecks.jsx';
import CardInfoPage from '../CardInfoPage/CardInfoPage.jsx';


function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/card-info-page">
          <CardInfoPage />
        </Route>
        <Route exact path="/api-search">
          <CardSearch />
        </Route>
        <Route exact path="/card-inventory">
          <Inventory />
        </Route>
        <Route exact path="/my-decks">
          <MyDecks />
        </Route>
        <Route exact path="/concept-decks">
          <ConceptDecks />
        </Route>
        <Route exact path="/home">
          <div className="App-div">
            <h1>Yu-Gi-Oh! Personal Inventory Database</h1>


          </div>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
