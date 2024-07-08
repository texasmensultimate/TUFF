const express = require('express');
const router = express.Router();
const YourModel = require('../models/yourModel');

// Define routes
router.get('/data', async (req, res) => {
  try {
    const data = await YourModel.find();
    res.json(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/data', async (req, res) => {
  try {
    const newData = new YourModel(req.body);
    const savedData = await newData.save();
    res.json(savedData);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
