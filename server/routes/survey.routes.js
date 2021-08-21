const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//Post Survey 
router.post('/', (req, res) => {
    sqlQuery = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES ($1, $2, $3, $4)`;
    console.log(req.body)
let sqlParams = [
    req.body.feeling,
    req.body.understanding,
    req.body.support,
    req.body.comment, 
]
pool.query(sqlQuery,sqlParams).then(dbRes => {
    console.log('dbRes is',dbRes)
    res.sendStatus(201)
}).catch(err => {
    console.log('Post to db error is:', err);
    res.sendStatus(500)
})
})

module.exports = router