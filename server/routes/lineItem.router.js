const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Get # of Pizzas currently in cart
router.get('/', (req, res) => {
  pool
    .query('SELECT SUM(quantity) from line_item;')
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error GET /api/lineItem', error);
      res.sendStatus(500);
    });
});

module.exports = router;
