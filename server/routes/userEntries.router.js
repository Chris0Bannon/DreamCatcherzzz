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
	WHERE "user_daily_entry".user_id = $1);`;
    pool.query(queryText, [req.user.id])
        .then((result) => {
            console.log(result);
            res.send(result.rows)            
        }).catch((error) => {
            res.sendStatus(500);
        });
});

module.exports = router;