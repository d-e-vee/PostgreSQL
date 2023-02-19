const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'metwo',
    host: 'localhost',
    database: 'postgres',
    password: 'password',
    port: 5432,
})

function getCars(req, res){
    pool.query('SELECT * FROM cars', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

function getBrands(req, res){
    pool.query('SELECT brand FROM cars', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

function getNames(req, res){
    pool.query('SELECT name FROM cars', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

function getRating(req, res){
    pool.query('SELECT rating FROM cars', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

function insert(req, res){
    console.log(req.body);
    
    pool.query('INSERT INTO cars (name, brand, rating) VALUES (\'' + req.body.name + "\',\'" + req.body.brand + "\'," + req.body.rating + ")", (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).send("A OK")
    })
}

function deleteElement(req,res){
    console.log(req.body);
    pool.query('DELETE FROM cars WHERE name = \'' + req.body.name + '\'', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).send("A OK")
    })
    
}

module.exports = {getCars, getBrands, getNames, getRating, insert, deleteElement}