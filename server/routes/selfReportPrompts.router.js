const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
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

router.get(`/`, (req, res) => {
    let queryText = `SELECT * FROM "self_report_prompts";`;
    pool.query(queryText)
    .then((result) => {
        console.log(result);
        res.send(result.rows)
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

router.post(`/`, rejectUnauthenticated, async (req, res) => {
    console.log('logging req.body in selfReportPromptsRouter', req.body);
    console.log('req.user:', req.user);


    const user = req.user.id;
    const connection = await pool.connect()
    try {
        await connection.query('BEGIN');
        const sqlAddUserEntry = `INSERT INTO "user_daily_entry" ("user_id", "date")
	VALUES ($1, NOW())
	RETURNING "id";`;
        const result = await connection.query(sqlAddUserEntry, [user])
        const entryId = result.rows[0].id
        const sqlAddUserResponse = `INSERT INTO "user_response_self_report" ("user_response", "self_report_id", "daily_entry_id")
    VALUES ($1, $2, $3);`;
        

        for (let i = 0; i < req.body.user_response.length; i++) {
            console.log('I am actually looping', req.body.user_response[i], i);
            await connection.query(sqlAddUserResponse, [req.body.user_response[i], i + 1, entryId])
        }
        await connection.query('COMMIT');
        res.sendStatus(201);
    } catch (error) {
        await connection.query('ROLLBACK');
        console.log('error in server side self report response POST', error);
        res.sendStatus(500)
    } finally {
        connection.release()
    }
})

module.exports = router;
