const express = require('express');
const inventoryRouter = express.Router();
const pool = require('../modules/pool.js');

// TODO GET Requests
inventoryRouter.get('/getCards', (req,res) => {
  //! disabled code for more efficient display data -gd
  // const queryText = `SELECT * from "inventory";`;
  const queryText = `Select "id", "card_id", "card_name", "card_type", "storage_location", "quantity"
  from "inventory" order by "card_name" ASC;`;
  pool.query(queryText).then((result) => {
    res.send(result.rows);
    console.log('total quantity number', result.rows);
  }).catch((error) => {
    console.log(`Error in /getAll: ${error}`);
    res.sendStatus(500);
  })
})

inventoryRouter.get('/totalCards', (req,res) => {
  const queryText = `Select SUM(quantity) as "total_card_quantity" from "inventory";`;
  pool.query(queryText).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log(`Error in /totalCards: ${error}`);
    res.sendStatus(500);
  })
})

//!!! Below is the fuzzy search syntax using the $1 syntax. It was stressfull. Thanks, chatGPT -gd
inventoryRouter.get('/searchName/:name', (req,res) => {
  const queryText = `Select "id", "card_id", "card_name", "card_type", "storage_location", "quantity"
  from "inventory" where "card_name" ILIKE '%' ||$1|| '%' order by "card_name" ASC;`;
  pool.query(queryText, [req.params.name]).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log(`Error in /getCards: ${error}`);
    res.sendStatus(500);
  })
})

inventoryRouter.get('/searchId/:id', (req,res) => {
  const queryText = `Select "id", "card_id", "card_name", "card_type", "storage_location", "quantity"
  from "inventory" where "card_id" = $1 order by "card_name" ASC;`;
  pool.query(queryText, [req.params.id]).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log(`Error in /getCards: ${error}`);
    res.sendStatus(500);
  })
})

//!!! Currently not functioning. disabled related code -gd
inventoryRouter.get('/searchDesc/:input', (req,res) => {
  const queryText = `Select "id", "card_id", "card_name", "card_type", "storage_location", "quantity"
  from "inventory" where "desc" ILIKE '&' ||$1|| '%' order by "card_name" ASC;`;
  pool.query(queryText, [req.params.input]).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log(`Error in /getCards: ${error}`);
    res.sendStatus(500);
  })
})

inventoryRouter.get('/databaseSearch/:id', (req, res) => {
  const queryText = `Select * from "inventory" where id = $1;`;
  pool.query(queryText, [req.params.id]).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log(`Error in databaseSearch ${error}`);
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