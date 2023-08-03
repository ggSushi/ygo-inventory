import './App.css';
import Inventory from '../Inventory/Inventory.jsx';
import CardSearch from '../CardSearch/CardSearch.jsx';
import ConceptDecks from '../ConceptDecks/ConceptDecks.jsx';
import MyDecks from '../MyDecks/MyDecks.jsx';


function App() {
  return (
    <div className="App-div">
      <h1>Hello World</h1>
      <Inventory />
      <CardSearch />
      <MyDecks />
      <ConceptDecks />
    </div>
  );
}

export default App;
