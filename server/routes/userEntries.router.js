const express = require('express');
const pool = require('../modules/pool');
const {rejectUnauthenticated} = require('../modules/authentication-middleware');
const router = express.Router();

router.get('/mostRecent', (req, res) => {
    let queryText = `SELECT * FROM "user_daily_entry"
	JOIN "user_response_habit" ON "user_daily_entry".id = "user_response_habit".daily_entry_id
	JOIN "habit_prompts" ON "habit_prompts".id = "user_response_habit".habit_id
	WHERE "user_daily_entry".id = (SELECT MAX("daily_entry_id") FROM "user_daily_entry"
	JOIN "user_response_habit" ON "user_daily_entry".id = "user_response_habit".daily_entry_id
	JOIN "habit_prompts" ON "habit_prompts".id = "user_response_habit".habit_id
	WHERE "user_daily_entry".user_id = $1)
	UNION
	SELECT * FROM "user_daily_entry"
	JOIN "user_response_self_report" ON "user_daily_entry".id = "user_response_self_report".daily_entry_id
	JOIN "self_report_prompts" ON "self_report_prompts".id = "user_response_self_report".self_report_id
	WHERE "user_daily_entry".id = (SELECT MAX("daily_entry_id") FROM "user_daily_entry"
	JOIN "user_response_self_report" ON "user_daily_entry".id = "user_response_self_report".daily_entry_id
	JOIN "self_report_prompts" ON "self_report_prompts".id = "user_response_self_report".self_report_id
	WHERE "user_daily_entry".user_id = $1)
	ORDER BY "daily_entry_id";`;
    pool.query(queryText, [req.user.id])
        .then((result) => {
            console.log(result);
            res.send(result.rows)            
        }).catch((error) => {
            res.sendStatus(500);
        });
});

router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "user_daily_entry"
	JOIN "user_response_habit" ON "user_daily_entry".id = "user_response_habit".daily_entry_id
	JOIN "habit_prompts" ON "habit_prompts".id = "user_response_habit".habit_id
	WHERE "user_daily_entry".user_id = $1
	UNION
	SELECT * FROM "user_daily_entry"
	JOIN "user_response_self_report" ON "user_daily_entry".id = "user_response_self_report".daily_entry_id
	JOIN "self_report_prompts" ON "self_report_prompts".id = "user_response_self_report".self_report_id
	WHERE "user_daily_entry".user_id =$1
	ORDER BY "date";`;
    pool.query(queryText, [req.user.id])
        .then((result) => {
            console.log(result);
            res.send(result.rows)
        }).catch((error) => {
            res.sendStatus(500);
        });
});

router.put('/edit', (req, res) => {
	console.log(req.body, req.user);
	let dailyEntryId = req.body.dailyEntryId;
	let promptId = req.body.promptId
	let response = req.body.response
	try{
		let queryText = `UPDATE "user_response_self_report" 
	SET "user_response" = $3
	WHERE "daily_entry_id" = $1 AND "self_report_id" = $2;`;
		let queryText2 = `UPDATE "user_response_habit"
	SET "user_response" = $3
	WHERE "daily_entry_id" = $1 AND "habit_id" = $2;`;
		pool.query(queryText, [dailyEntryId, promptId, response])
		.then(() => {
			pool.query(queryText2, [dailyEntryId, promptId, response])
			.then((result)=> {
				res.sendStatus(201)
			}).catch((error) => {
				console.log('error in queryText2', error);
			})
		}).catch((error) => {
			console.log('error in selfReport server side PUT', error);
		});
	}
	catch(error){
		console.log('made it to the catch', error);
	}	
 })



//  router.delete('/:id', (req, res) => {
// console.log('id to go', req.params.id);
	 
// try{
// const queryTex1 = `DELETE FROM "user_response_habit"
// 	WHERE "daily_entry_id" = $1;`
// 	let queryText2 = `DELETE FROM "user_response_self_report"
// 	WHERE "daily_entry_id" = $1;`
// 	pool.query(queryTex1, [req.params.id])
// 	.then(() => {
// 		pool.query(queryText2, [req.params.id])
// 			.then((result)=> {
// 				res.sendStatus(200)
// 			}).catch((error) => {
// 				log('error in queryText2', error)
// 			})
// 	}).catch((error) => {
// console.log('error in query1', error);
// 	})
// }
// catch(error){
// 	console.log('catching in the big delete catch', error);
// }
//  })

 router.delete('/:id', async (req, res) => {
	 console.log('req.params.id', req.params.id);
	const user = req.user.id;
	const date = req.prams.id
	
	console.log('show me the date', date);
	

	const connection = await pool.connect()
	try{
		await connection.query('BEGIN');
		const sqlFindEntryIds = `SELECT "id" FROM "user_daily_entry"
		WHERE "date" = CAST($1 AS DATE) AND "user_id" = $2;`;
		const result = await connection.query( sqlFindEntryIds, [date, user]);

		const entryId1 = result.rows[0].id;
		const entryId2 = result.rows[1].id;
		const deleteFirst = `DELETE FROM "user_response_self_report"
	WHERE "daily_entry_id" = $3 OR "daily_entry_id" = $4;`;
		const deleteSecond = `DELETE FROM "user_response_habit"
	WHERE "daily_entry_id" = $3 OR "daily_entry_id" = $4;`;
		const deleteLast = `DELETE FROM "user_daily_entry"
	WHERE "id" = $3 OR "id" = $4;`
	await connection.query(deleteFirst, [entryId1, entryId2]);
	await connection.query(deleteSecond, [entryId1, entryId2]);
	await connection.query(deleteLast, [ entryId1, entryId2]);
	await connection.query('COMMIT');
	res.sendStatus(200);
	}catch (error) {
		await connection.query('ROLLBACK');
		console.log(`Transaction error -RollingBack DELEETS`, error);
		res.sendStatus(500);
	}finally {
		connection.release()
	}	 
 });

module.exports = router;