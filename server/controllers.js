// let db = require('../db');

//all mysql controllers have been successfully tested with post man
const fruitControllers  = {
    getFruit: (req, res) => {
        let sql = `SELECT * FROM fruit`;
    
        db.query(sql, [], (err, result) => {
            if (err) {
                console.log('error selecting fruit', err)
                res.sendStatus(500)
            } else {
                res.send(result)
            }
        });
    },

    postFruit: (req, res) => {
        let newFruit = {
            fruitname: req.body.fruit,
            isle_number: req.body.isle
        };
    
        let params = [newFruit.fruitname, newFruit.isle_number]
    
        let sql = `INSERT INTO fruit (fruitname, isle_number) VALUES (?, ?)`
    
        db.query(sql, params, (err, result) => {
            if (err) {
                console.log('error posting to fruit', err)
                res.sendStatus(500)
            } else {
                res.status(201).send(result)
            }
        });
    },

    updateFruitIsle: (req, res) => {
        let changeIsle = {
            fruitname: req.body.fruit,
            isle_number: req.body.new_isle
        }
        let params = [changeIsle.isle_number, changeIsle.fruitname];
        let sqlUpdate = `UPDATE fruit SET isle_number = ? WHERE fruitname = ?`
        db.query(sqlUpdate, params, (err, result) => {
            if (err) {
                console.log('error updating fruit isle', err);
                res.sendStatus(500)
            } else {
                res.status(201).send(result)
            }
        });
    },

    deleteFruitItem: (req, res) => {
        let removeFruit = {
            fruitname: req.body.remove_fruit
        }
    
        let params = [removeFruit.fruitname]
        let sqlDelete = `DELETE from fruit WHERE fruitname = ?`
    
        db.query(sqlDelete, params, (err, result) => {
            if (err) {
                console.log('error deleting fruit', err)
                res.sendStatus(500)
            } else {
                res.status(201).send(result)
            }
        })
    }

}

const greensControllers  = {
    getGreens: (req, res) => {
        let sql = `SELECT * FROM greens`;
    
        db.query(sql, [], (err, result) => {
            if (err) {
                console.log('error selecting greens', err);
                res.sendStatus(500);
            } else {
                res.send(result);
            }
        });
    }, 

    postGreens: (req, res) => {
        let newGreen = {
            veggie_type: req.body.vegetable,
            isle_number: req.body.isle
        };
    
        let params = [newGreen.veggie_type, newGreen.isle_number];
        let sql = `INSERT INTO greens (veggie_type, isle_number) VALUES (?, ?)`
    
        db.query(sql, params, (err, result) => {
            if (err) {
                console.log('error posting to greens', err);
                res.sendStatus(500);
            } else {
                res.status(200).send(result);
            }
        })
    },

    updateGreensIsle: (req, res) => {
        let changeIsle = {
            veggie_type: req.body.vegetable,
            isle_number: req.body.new_isle
        }
    
        let params = [changeIsle.isle_number, changeIsle.veggie_type];
        let sqlUpdate = `UPDATE greens SET isle_number = ? WHERE veggie_type = ?`;
        db.query(sqlUpdate, params, (err, result) => {
            if (err) {
                console.log('error updating greens', err);
                res.sendStatus(500)
            } else {
                res.status(201).send(result)
            }
        });
    },

    deleteGreenItem: (req, res) => {
        let removeGreens = {
            veggie_type: req.body.remove_vegetable
        }
    
        let params = [removeGreens.veggie_type]
        let sqlDelete = `DELETE from greens WHERE veggie_type = ?`
    
        db.query(sqlDelete, params, (err, result) => {
            if (err) {
                console.log('error deleting vegetables', err)
                res.sendStatus(500)
            } else {
                res.status(201).send(result)
            }
        })
    }

}

const proteinControllers  = {
    getProtein: (req, res) => {
        let sql = `SELECT * FROM protein`;
    
        db.query(sql, [], (err, result) => {
            if (err) {
                console.log('error selecting from protein', err);
                res.sendStatus(500);
            } else {
                res.send(result)
            }
        });
    },

    postProtein: (req, res) => {
        let newProtein = {
            protein_type: req.body.protein,
            isle_number: req.body.isle
        };
    
        let params = [newProtein.protein_type, newProtein.isle_number];
        let sql = `INSERT INTO protein (protein_type, isle_number) VALUES (?, ?)`;
    
        db.query(sql, params, (err, result) => {
            if (err) {
                console.log('error posting to protein');
                res.sendStatus(500)
            } else {
                res.status(201).send(result)
            }
        })
    },

    updateProteinIsle:  (req, res) => {
        let changeIsle = {
            protein_type: req.body.protein,
            isle_number: req.body.new_isle
        }
    
        let params = [changeIsle.isle_number, changeIsle.protein_type]
        let sqlUpdate = `UPDATE protein SET isle_number = ? WHERE protein_type = ?`;
        db.query(sqlUpdate, params, (err, result) => {
            if (err) {
                console.log('error updating protein', err)
                res.sendStatus(500)
            } else {
                res.status(201).send(result)
            }
        });
    },

    deleteProteinItem: (req, res) => {
        let removeProtein = {
            protein_type: req.body.remove_protein
        }
    
        let params = [removeProtein.protein_type]
        let sqlDelete = `DELETE from protein WHERE protein_type = ?`
    
        db.query(sqlDelete, params, (err, result) => {
            if (err) {
                console.log('error deleting protein', err)
                res.sendStatus(500)
            } else {
                res.status(201).send(result)
            }
        })
    }

}

module.exports = { fruitControllers, greensControllers, proteinControllers }