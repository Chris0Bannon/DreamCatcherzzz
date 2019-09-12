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

router.post(`/`, async (req, res) => {
    console.log('logging req.body in habitRouter', req.body);
    
    const user = req.user.id;
    const connection =await pool.connect()
    try{
        await connection.query('BEGIN');
        const sqlAddUserEntry = `INSERT INTO "user_daily_entry" ("user_id", "date")
	VALUES ($1, NOW())
	RETURNING "id";`;
    const result = await connection.query( sqlAddUserEntry, [user])
    const entryId =result.rows[0].id
        const sqlAddUserResponse = `INSERT INTO "user_response_self_report" ("user_response", "self_report_id", "user_entry_id")
    VALUES ($1, $2, $3);`
    
}catch(error){
    console.log(error);
    
}
})

module.exports = router;