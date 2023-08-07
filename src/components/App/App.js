import './App.css';
import Inventory from '../Inventory/Inventory.jsx';
import CardSearch from '../CardSearch/CardSearch.jsx';
import ConceptDecks from '../ConceptDecks/ConceptDecks.jsx';
import MyDecks from '../MyDecks/MyDecks.jsx';


function App() {
  return (
    <div className="App-div">
      <h1>Yu-Gi-Oh! Personal Inventory Database</h1>
      <CardSearch />
      <Inventory />
      <MyDecks />
      <ConceptDecks />
    </div>
  );
}

export default App;
