const express = require('express');
const router = express.Router();
const { getItems, getItem, createItem } = require('../controllers/tracks');

// TODO: https://localhost:3000/tracks GET, POST, PUT, DELETE

router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', createItem);

module.exports = router;