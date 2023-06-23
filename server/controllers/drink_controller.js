const express = require('express');
const router = express.Router();

// Drink Model
const Drink = require('../models/Drink')

// GET: http://localhost:8000/test
router.get('/test', (req, res) => res.send('drink route testing!'));

// GET
router.get('/drinks', (req, res) => {
  Drink.find()
    .then(drinks => res.json(drinks))
    .catch(err => res.status(404).json({ nodrinksfound: 'No Drinks found' }));
});

// GET all drinks http://localhost:8000/drinks
router.get('/', (req, res) => {
  Drink.find()
    .then(drinks => res.json(drinks))
    .catch(err => res.status(404).json({ nodrinksfound: 'No Drinks found' }));
});

// GET single drink http://localhost:8000/drinks/:id
router.get('/:id', (req, res) => {
  Drink.findById(req.params.id)
    .then(drink => res.json(drink))
    .catch(err => res.status(404).json({ nodrinkfound: 'No Drink found' }));
});

// POST: http://localhost:8000/drinks
router.post('/', (req, res) => {
  const newDrink = new Drink(req.body);
  newDrink.save()
    .then(drink => res.json(drink))
    .catch(err => res.status(400).json({ error: 'Unable to add this drink' }));
});


// UPDATE PUT: http://localhost:8000/drinks/:id
router.put('/:id', (req, res) => {
  Drink.findByIdAndUpdate(req.params.id, req.body)
    .then(drink => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// DELETE: http://localhost:8000/drinks/:id
router.delete('/:id', (req, res) => {
  Drink.findByIdAndRemove(req.params.id, req.body)
    .then(drink => res.json({ mgs: 'Drink entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a drink' }));
});


module.exports = router;
