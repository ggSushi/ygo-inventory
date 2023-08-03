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

app.use(express.static('public'));
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)
});
