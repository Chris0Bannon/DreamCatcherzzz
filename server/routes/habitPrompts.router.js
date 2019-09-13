const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
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
    console.log('req.user GET:', req.user);
    
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
    console.log('logging req.body in habitRouter', req.body);
   console.log('req.user:', req.user);
   

    const user = req.user.id;
    const connection =await pool.connect()
    try{
        await connection.query('BEGIN');
        const sqlAddUserEntry = `INSERT INTO "user_daily_entry" ("user_id", "date")
	VALUES ($1, NOW())
	RETURNING "id";`;
    const result = await connection.query( sqlAddUserEntry, [user])
    const entryId =result.rows[0].id
        const sqlAddUserResponse = `INSERT INTO "user_response_habit" ("user_response", "habit_id", "daily_entry_id")
    VALUES ($1, $2, $3);`;
    await connection.query(sqlAddUserResponse, ['true', 3, entryId])
    
    // for (let i =0; i < req.body.user_response; i++){
    //     console.log('I am actually looping', item[i]);
    //     await connection.query(sqlAddUserResponse, [item, item[i], entryId])
    // }
   await connection.query('COMMIT');
   res.sendStatus(201);
}catch(error){
    await connection.query('ROLLBACK');
    console.log('error in server side habit response POST', error);
    res.sendStatus(500)
}finally{
    connection.release()
}
})

module.exports = router;