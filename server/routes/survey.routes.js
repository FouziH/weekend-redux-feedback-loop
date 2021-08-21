const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//Post Survey 
router.post('/', (req, res) => {
    sqlQuery = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES ($1, $2, $3, $4)`;
    console.log(req.body)
    console.log(typeof req.body.feeling)
    console.log(typeof req.body.understanding)
    console.log( typeof req.body.support)
let sqlParams = [
  req.body.customerFeeling,
  req.body.customerUnderStanding,
  req.body.customerSupport,
  req.body.customerComment,
];
pool.query(sqlQuery,sqlParams).then(dbRes => {
    console.log('dbRes is',dbRes)
    res.sendStatus(201)
}).catch(err => {
    console.log('Post to db error is:', err);
    res.sendStatus(500)
})
})

//GET Survey 

router.get('/', (req, res) =>{
    let sqlQuery = `SELECT * FROM "feedback"
    ORDER BY "date" ASC`
    pool.query(sqlQuery)
    .then(dbRes => {
        res.send(dbRes.rows)
        console.log(dbRes.rows)
    }).catch(error => {
        console.log('dbRes /get error is:', error)
    })
})

module.exports = router