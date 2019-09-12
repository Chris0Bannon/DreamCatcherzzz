const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get(`/:id`, (req,res) => {
    let habit = req.params.id
    let queryText = `SELECT * FROM "habit_prompts" WHERE "id" = $1;`;
    pool.query(queryText, [habit])
    .then((result)=> {
        console.log(result);
        res.send(result.rows[0])
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

router.get(`/`, (req, res) => {
    let queryText = `SELECT * FROM "habit_prompts";`;
    pool.query(queryText)
        .then((result) => {
            console.log(result);
            res.send(result.rows)
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});


module.exports = router;