
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
    "access_level" INT DEFAULT = 0 NOT NULL
);

CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "user_daily_entry"
(
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "date" DATE
);

CREATE TABLE "habit_prompts"
(
    "id" SERIAL PRIMARY KEY,
    "habit_prompt_text" VARCHAR(350)
);

CREATE TABLE "user_response_habit"
(
    "id" SERIAL PRIMARY KEY,
    "user_response" BOOLEAN,
    "habbit_id" INT REFERENCES "habit_prompts",
    "daily_entry_id" INT REFERENCES "user_daily_entry"
);

CREATE TABLE "self_report_prompts"
(
    "id" SERIAL PRIMARY KEY,
    "self_report_prompt_text" VARCHAR(350)
);

CREATE TABLE "user_response_self_report"
(
    "id" SERIAL PRIMARY KEY,
    "user_response" BOOLEAN,
    "self_report_id" INT REFERENCES "self_report_prompts",
    "user_entry_id" INT REFERENCES "user_daily_entry"
);