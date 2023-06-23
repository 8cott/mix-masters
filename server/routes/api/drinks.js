// const express = require('express');
// const router = express.Router();

// // Drink Model
// const Drink = require('../../models/Drink')

// // GET api/drink/test
// router.get('/test', (req, res) => res.send('drink route testing!'));

// // GET api/drinks
// router.get('/', (req, res) => {
//   Drink.find()
//     .then(drinks => res.json(drinks))
//     .catch(err => res.status(404).json({ nodrinksfound: 'No Drinks found' }));
// });

// // GET api/drinks/:id
// router.get('/:id', (req, res) => {
//   Drink.findById(req.params.id)
//     .then(drink => res.json(drink))
//     .catch(err => res.status(404).json({ nodrinkfound: 'No Drink found' }));
// });

// // GET api/drinks
// router.post('/', (req, res) => {
//   Drink.create(req.body)
//     .then(drink => res.json({ msg: 'Drink added successfully' }))
//     .catch(err => res.status(400).json({ error: 'Unable to add this drink' }));
// });

// // GET api/drinks/:id
// router.put('/:id', (req, res) => {
//   Drink.findByIdAndUpdate(req.params.id, req.body)
//     .then(drink => res.json({ msg: 'Updated successfully' }))
//     .catch(err =>
//       res.status(400).json({ error: 'Unable to update the Database' })
//     );
// });

// // GET api/drink/:id
// router.delete('/:id', (req, res) => {
//   Drink.findByIdAndRemove(req.params.id, req.body)
//     .then(drink => res.json({ mgs: 'Drink entry deleted successfully' }))
//     .catch(err => res.status(404).json({ error: 'No such a drink' }));
// });

// module.exports = router;