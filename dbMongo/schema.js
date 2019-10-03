let mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    food_type: String,
    food_name: String,
    isle_number: Number
})

const GroceryStore = mongoose.model('GroceryStore', foodSchema);

const fruit = new GroceryStore({
    food_type: 'fruit',
    food_name: 'orange',
    isle_number: 3
});