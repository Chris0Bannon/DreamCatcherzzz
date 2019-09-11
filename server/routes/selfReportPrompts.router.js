const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get(`/:id`, (req, res) => {
    let selfReport = req.params.id
    let queryText = `SELECT * FROM "self_report_prompts" WHERE "id" = $1;`;
    pool.query(queryText, [selfReport])
        .then((result) => {
            console.log(result);
            res.send(result.rows[0])
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

module.exports = router;
