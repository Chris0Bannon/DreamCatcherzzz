const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

router.get(`/:id`, (req,res) => {
    let habit = req.params.id
    let queryText = `SELECT * FROM "habit_prompts" WHERE "id" = $1;`;
    pool.query(queryText, [habit])
    .then((result)=> {
       
        res.send(result.rows[0])
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

router.get(`/`, (req, res) => {
    let queryText = `SELECT * FROM "habit_prompts";`;
    console.log('req.user GET:', req.user);
    
    pool.query(queryText)
        .then((result) => {
         
            res.send(result.rows)
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});


module.exports = router;