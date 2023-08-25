const express = require('express');
const inventoryRouter = express.Router();
const pool = require('../modules/pool.js');

// TODO GET Requests
inventoryRouter.get('/getAll', (req,res) => {
  //! disabled code for more efficient display data -gd
  // const queryText = `SELECT * from "inventory";`;
  const queryText = `Select "id", "card_id", "card_name", "card_type", "storage_location", "quantity"
  from "inventory";`;
  pool.query(queryText).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log(`Error in /getAll: ${error}`);
    res.sendStatus(500);
  })
})

// TODO POST Requests
inventoryRouter.post('/addToInv', (req, res) => {
  console.log(`POST to Inventory`);
  const queryText = `Insert Into "inventory" 
  ("card_name", "card_id", "card_type", "frameType", "desc", 
  "atk", "def", "level", "type", "attribute", "card_sets", 
  "card_images", "quantity", "storage_location")
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);`

  pool.query(queryText, [
    req.body.name, 
    req.body.id, 
    req.body.type, 
    req.body.frameType, 
    req.body.desc, 
    req.body.atk, 
    req.body.def, 
    req.body.level, 
    req.body.race,
    req.body.attribute,
    req.body.card_sets,
    req.body.card_images,
    req.body.quantity,
    req.body.storage_location
  ])
  .then((result) => {
    res.sendStatus(200);
  }).catch((error) => {
    console.log(`Error in POST inventory: ${error}`);
    res.sendStatus(500);
  })
});

// TODO PUT Requests


// TODO DELETE Requests

module.exports = inventoryRouter;