const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
//Post Survey 
router.post('/', (req, res) => {
  // query request and passing $1 as an id value to mask
  sqlQuery = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES ($1, $2, $3, $4)`;
  console.log(req.body);
  console.log(typeof req.body.feeling);
  console.log(typeof req.body.understanding);
  console.log(typeof req.body.support);
  // saving the req.params.id to sqlParams
  let sqlParams = [
    req.body.customerFeeling,
    req.body.customerUnderStanding,
    req.body.customerSupport,
    req.body.customerComment,
  ];
  //pool.query request and passing sqlQuery, sqlParams as argument
  pool
    .query(sqlQuery, sqlParams)
    .then((dbRes) => {
      // console log the dbRes
      console.log("dbRes is", dbRes);
      res.sendStatus(201); //send 201 status
    })
    .catch((err) => {
      // console log the error
      console.log("Post to db error is:", err);
      res.sendStatus(500);
    });
})
//GET Survey 
router.get('/', (req, res) =>{
    let sqlQuery = `SELECT * FROM "feedback"
    ORDER BY "id" DESC`
    pool.query(sqlQuery)
    .then(dbRes => {// send dbRes.row
        res.send(dbRes.rows)
        console.log(dbRes.rows); //log dbRes.row 
    }).catch(error => {
      // console log the error
      console.log("dbRes /get error is:", error);
    })
})
// Delete Survey based on id
router.delete('/:id', (req, res) =>{
    // query request and passing $1 as an id value to mask 
    let sqlQuery =  `DELETE FROM "feedback" 
    WHERE "id"=$1`
    // saving the req.params.id to sqlParams 
    let sqlParams = [req.params.id]
    //pool.query request and passing sqlQuery, sqlParams as argument
    pool.query(sqlQuery, sqlParams)
    .then(dbRes => { // console log the dbRes 
        console.log("db Res delete response is", dbRes)
        res.sendStatus(200); // send okay state
    }).catch(error =>{
      // console log the error
      console.log("Delete request error is", error);
    })
})
router.put('/:id', (req, res) => {
  let sqlQuery = `UPDATE "feedback"
                  SET "flagged" = true
                  WHERE "id" =$1;`
  let sqlParams = [req.params.id]
  pool.query(sqlQuery, sqlParams)
  .then(dbRes => {
    console.log('PUT request db response is', dbRes)
    res.sendStatus(200)
  }).catch(error => {
    console.log("PUT request db error is", error);
  })
})
module.exports = router