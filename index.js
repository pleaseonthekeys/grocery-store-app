const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
// const db = require('./db');
const food = require('./data.json')
const GroceryStore = require('./dbMongo') //maybe index.js
const { fruitControllers, greensControllers, proteinControllers } = require('./server/controllers')
const { mongoFruitControllers, mongoGreensControllers, mongoProteinControllers } = require('./server/mongoControllers')
const app = express();

app.use(morgan('dev'));
app.use(parser.json());
app.use(express.static(__dirname + '/client/dist'));


//local data.json requests

app.get('/', (req, res) => {
    let results = food.fruit;
    if (results) {
        res.send(`<h1>WHAT UPPPPP, Go GET YOUR: </h1>Fruit: <ul><li>${food.fruit[0]}</li><li>${food.fruit[1]}</li><li>${food.fruit[2]}</li><li>${food.fruit[3]}</li></ul>`)
    } else {
        res.send(`<h1>WHAT UPPPPP, There's nothing to see here!</h1>`)
    }
})

app.get('/fruits', (req, res) => {
    // res.status(200).send(food);
    GroceryStore.find({food_type: 'fruit'})
  .exec()
  .then((data) => {
      console.log('found', data)
      res.send(data)
  })
  .catch((err) => {
    console.log('just in case', err)
    res.sendStatus(500)
  });
});

app.post('/food', (req, res) => {
    let newFood = req.body.fruit;
    food.fruit.push(newFood);
    res.status(201).send(`You have successfully posted your ${newFood}!`);
});

app.post('/food/newFood', (req, res)=> {
    let category = req.body.dessert;
    food.dessert = category;


    res.status(200).send(`you have successfully added a new food category! Here is your whole list: ${food}`)
});

app.put('/food/newFood', (req, res) => {
    let greens = req.body.greens;
    let replace = req.body.replace;
    delete food[replace];
    food.greens = greens;

    res.status(201).send(`you have successfully replaced ${replace} with ${greens}! Good work.`)

});

app.delete('/food', (req, res) => {
    let remove = req.body.trashIt;
    delete food[remove];

    res.status(201).send(`Don't worry, you do not need to buy any more ${remove}!`)
});





//mongo and mysql database foods


// app.get('/fruit', fruitControllers.getFruit);
app.get('/fruit', mongoFruitControllers.getFruit);

//comment out mysql
//controller routes for mongo

// app.get('/fruit', (req, res) => {
//     //do this for mongo then modularize
// })



// app.get('/greens', greensControllers.getGreens);
app.get('/greens', mongoGreensControllers.getGreens);

// app.get('/protein', proteinControllers.getProtein);
app.get('/protein', mongoProteinControllers.getProtein);

//add foods to the grocery store
// app.post('/fruit', fruitControllers.postFruit);
app.post('/fruit', mongoFruitControllers.postFruit);

// app.post('/greens', greensControllers.postGreens);
app.post('/greens', mongoGreensControllers.postGreens);

// app.post('/protein', proteinControllers.postProtein);
app.post('/protein', mongoProteinControllers.postProtein);

//put requests to change isle or name of food

//change isle of single fruit
// app.put('/fruit', fruitControllers.updateFruitIsle);
app.put('/fruit', mongoFruitControllers.updateFruitIsle);

//change isle of a single vegetable
// app.put('/greens', greensControllers.updateGreensIsle);
app.put('/greens', mongoGreensControllers.updateGreensIsle);

//change isle of single protein item
// app.put('/protein', proteinControllers.updateProteinIsle);
app.put('/protein', mongoProteinControllers.updateProteinIsle);

//remove food item from grocery store

//remove fruit
// app.delete('/fruit', fruitControllers.deleteFruitItem)
app.delete('/fruit', mongoFruitControllers.deleteFruitItem)

//remove greens
// app.delete('/greens', greensControllers.deleteGreenItem)
app.delete('/greens', mongoGreensControllers.deleteGreenItem)

//remove protein
// app.delete('/protein', proteinControllers.deleteProteinItem)
app.delete('/protein', mongoProteinControllers.deleteProteinItem)
















const port = 3457;
app.listen(port, () => {
    console.log(`server is listening on port ${port}!`)
})