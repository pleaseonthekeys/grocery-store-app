let GroceryStore = require('../dbMongo')

const mongoFruitControllers = {
    getFruit: (req, res) => {
        GroceryStore.find({ food_type: 'fruit' })
            .exec()
            .then((data) => {
                console.log('found', data)
                res.send(data)
            })
            .catch((err) => {
                console.log('just in case', err)
                res.sendStatus(500)
            });
    },

    postFruit: (req, res) => {
        let params = {
            food_type: req.body.type,
            food_name: req.body.name,
            isle_number: req.body.isle
        };

        // let errorArgs = [params.food_type, params.food_name, params.isle_number]
        GroceryStore.create(params)
            .then((data) => {
                console.log('created fruit')
                res.send({ data })
            })
            .catch((err) => {
                console.log('error creating fruit', err)
                res.sendStatus(500)
            })
    },

    updateFruitisle: (req, res) => {
        let params = {
            food_type: req.body.type,
            food_name: req.body.name,
            isle_number: req.body.old_isle
        };

        let updatedisle = { isle_number: req.body.new_isle }

        GroceryStore.updateMany(params, updatedisle)
            .then((data) => {
                console.log(`updated ${params.food_name} isle to ${updatedisle.isle_number}`)
                res.send({ data })
            })
            .catch((err) => {
                console.log(`error updating ${params.food_name} isle`)
                res.sendStatus(500)
            })
    },

    deleteFruitItem: (req, res) => {
        console.log("req.body here!", req.body)
        let params = {
            food_name: req.body.deleteFood
        }

        GroceryStore.deleteMany(params)
            .then((data) => {
                console.log("here is data from then", data)
                console.log(`removed ${params.food_name} from grocery store`)
                res.send({ data })
            })
            .catch((err) => {
                console.log("here is error from catch ", err)
                console.log(`could not remove ${params.food_name}`)
                res.sendStatus(500)
            })
    }
}



const mongoGreensControllers = {
    getGreens: (req, res) => {
        GroceryStore.find({ food_type: 'vegetable' })
            .exec()
            .then((data) => {
                console.log('found', data)
                res.send(data)
            })
            .catch((err) => {
                console.log('error finding vegetables', err)
                res.sendStatus(500)
            });
    },

    postGreens: (req, res) => {
        let params = {
            food_type: req.body.type,
            food_name: req.body.name,
            isle_number: req.body.isle
        };

        GroceryStore.create(params)
            .then((data) => {
                console.log('created greens')
                res.send({ data })
            })
            .catch((err) => {
                console.log('error creating greens', err)
                res.sendStatus(500)
            });
    },

    updateGreensisle: (req, res) => {

        let params = {
            food_type: req.body.type,
            food_name: req.body.name,
            isle_number: req.body.old_isle
        };

        let updatedisle = { isle_number: req.body.new_isle }

        GroceryStore.updateMany(params, updatedisle)
            .then((data) => {
                console.log(`updated ${params.food_name} isle to ${updatedisle.isle_number}`)
                res.send({ data })
            })
            .catch((err) => {
                console.log(`error updating ${params.food_name} isle`)
                res.sendStatus(500)
            })

    },

    deleteGreenItem: (req, res) => {
        let params = {
            food_name: req.body.deleteFood
        }

        GroceryStore.deleteMany(params)
            .then((data) => {
                console.log(`removed ${params.food_name} from grocery store`)
                res.send({ data })
            })
            .catch((err) => {
                console.log(`could not remove ${params.food_name} from grocery store`)
                res.sendStatus(500)
            })
    }
}




const mongoProteinControllers = {
    getProtein: (req, res) => {
        GroceryStore.find({ food_type: 'protein' })
            .exec()
            .then((data) => {
                console.log('found protein', data)
                res.send({ data })
            })
            .catch((err) => {
                console.log('error finding protein', err)
                res.sendStatus(500)
            })
    },

    postProtein: (req, res) => {
        let params = {
            food_type: req.body.type,
            food_name: req.body.name,
            isle_number: req.body.isle
        };

        GroceryStore.create(params)
            .then((data) => {
                console.log('created protein')
                res.send({ data })
            })
            .catch((err) => {
                console.log('error creating protein', err)
                res.sendStatus(500)
            })
    },

    updateProteinisle: (req, res) => {
        let params = {
            food_type: req.body.type,
            food_name: req.body.name,
            isle_number: req.body.old_isle
        };

        let updatedisle = { isle_number: req.body.new_isle }


        GroceryStore.updateMany(params, updatedisle)
            .then((data) => {
                console.log(`updated ${params.food_name} isle to ${updatedisle}`)
                res.send({ data })
            })
            .catch((err) => {
                console.log(`error updating ${params.food_name} isle`)
                res.sendStatus(500)
            })
    },

    deleteProteinItem: (req, res) => {
        let params = {
            food_name: req.body.deleteFood
        }
        GroceryStore.deleteMany(params)
            .then((data) => {
                console.log(`removed ${params.food_name} from the grocery store`)
                res.send({ data })
            })
            .catch((err) => {
                console.log(`could not remove ${params.food_name} from the grocery store`)
                res.sendStatus(500)
            })
    }
}



module.exports = { mongoFruitControllers, mongoGreensControllers, mongoProteinControllers }