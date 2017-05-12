DROP TABLE IF EXISTS tutors, reviews;


CREATE TABLE tutors
(
    id SERIAL PRIMARY KEY,
    email varchar(100),
    password (50)
    first_name varchar(50),
    last_name varchar(50),
    picture_url TEXT,
    google_id TEXT,
    date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    bio TEXT(250),
);
