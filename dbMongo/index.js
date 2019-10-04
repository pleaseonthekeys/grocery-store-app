let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/food', { useNewUrlParser: true }); //infers port number
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('mongodb is connected!')
});


const foodSchema = mongoose.Schema({
  food_type: String,
  food_name: String,
  isle_number: Number
})

const GroceryStore = mongoose.model('GroceryStore', foodSchema);

// const orange = new GroceryStore();

// GroceryStore.create({
//   food_type: 'protein',
//   food_name: 'chicken breast',
//   isle_number: 10
// }, (err, Orange) => {
//   if (err) {
//     console.log('error creating orange', err)
//   } else {
//     console.log('created orange', Orange)
//   }
// });

// GroceryStore.find()
//   .exec()
//   .then((data) => {
//       console.log('found', data)
//   })
//   .catch((err) => {
//     console.log('just in case', err)
//   });
// let query = {food_name: 'orange'}
// let update = {food_name: 'apple'}
// GroceryStore.update(query, update, {}, (err, result) => {
//   if (err) {
//     console.log({err})
//   } else {
//     console.log({result})
//   }
// }); //wrap in object brackets for descriptive console.log

//   var query = { name: 'borne' };
// Model.update(query, { name: 'jason bourne' }, options, callback);

// // is sent as
// Model.update(query, { $set: { name: 'jason bourne' }}, options, function(err, res));
// // if overwrite option is false. If overwrite is true, sent without the $set wrapper.

module.exports = GroceryStore
