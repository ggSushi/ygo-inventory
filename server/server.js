require('dotenv').config();
const express = require('express');
console.log(process.env.EXAMPLE);
const app = express();
const axios = require('axios');
const PORT = process.env.PORT || 5001;

// Routes
const inventoryRouter = require('./routes/inventory.router');
const deckCurrentRouter = require('./routes/deckCurrent.router');
const deckConceptRouter = require('./routes/deckConcept.router');

app.use(express.json());

// Link URLs to routes
app.use('/inventory', inventoryRouter);
app.use('/myDecks', deckCurrentRouter);
app.use('/buildDecks', deckConceptRouter);

// Axios request for YGOProDeck API
app.post('/search', (req, res) => {
  axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?${req.body.data}`)
  .then(response => {
    res.send(response.data);
  }).catch((error) => {
    console.log(`Error in YGOProDeck Request: ${error}`);
    res.sendStatus(500);
  })
});

app.use(express.static('public'));
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)
});
