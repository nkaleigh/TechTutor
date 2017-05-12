CREATE TABLE IF NOT EXISTS tutors
(
    id SERIAL PRIMARY KEY,
    email varchar(100),
    password varchar(50),
    firstname varchar(50),
    lastname varchar(50),
    citystate varchar(50),
    picture_url TEXT,
    jobtitle varchar(50),
    bio TEXT,
    skillone varchar(50),
    skilltwo varchar(50),
    skillthree varchar(50),
    skillfour varchar(50),
    skillfive varchar(50),
    skillsix varchar(50),
    schoolone varchar(50),
    schooltwo varchar(50),
    schoolthree varchar(50),
    degreeone varchar(50),
    degreetwo varchar(50),
    degreethree varchar(50),
    rate varchar(10)
);

CREATE TABLE IF NOT EXISTS reviews(
id SERIAL PRIMARY KEY,
studentfirstname varchar(50),
studentlastname varchar(50),
tutor_id int REFERENCES tutors(id),
rating varchar(50),
review TEXT
);



INSERT INTO tutors (email, password, firstname, lastname, citystate, picture_url, jobtitle, bio, rate, skillone, skilltwo, skillthree, skillfour, skillfive, skillsix, schoolone, schooltwo, schoolthree, degreeone, degreetwo, degreethree)
VALUES ('kaleigh@gmail.com', 'password', 'Kaleigh', 'Niemela', 'Orem, Utah', null, 'Web Developer Tutor', 'I recently completed Dev Mountain''s Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.', '$10/hr', 'Angular.js', 'Javascript', 'Node.js', 'React', 'SQL', 'GitHub', 'Brigham Young University', 'DevMountain', null, 'BA English Linguistics', null, null), ('christopher@gmail.com', 'password', 'Christopher', 'Vosters', 'Orem, Utah', null, 'Javascript Tutor', 'I recently completed Dev Mountain''s Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.', '$10/hr', 'Angular.js', 'Javascript', 'Node.js', 'React', 'SQL', 'GitHub', 'Brigham Young University', 'DevMountain', null, 'BA Philosphy', null, null), ('oshion@gmail.com', 'password', 'Oshion', 'Niemela', 'Provo, Utah', null, 'Python Tutor', 'I am a current student at Brigham Young University. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.', '$20/hr', 'Python', 'Javascript', 'Java', 'C++', 'SQL', 'GitHub', 'Brigham Young University', null, null, 'BS Computer Science', null, null), ('ed@gmail.com', 'password', 'Ed', 'Smith', 'Lindon, Utah', null, 'Angular Tutor', 'I recently completed Dev Mountain''s Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.', '$12/hr', 'Angular.js', 'Javascript', 'Node.js', 'React', 'SQL', 'GitHub', 'Utah State University', 'DevMountain', null, 'BS Biology', null, null), ('anna@gmail.com', 'password', 'Anna', 'Wright', 'Springville, Utah', null, 'Web Developer Tutor', 'I recently completed Dev Mountain''s Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.', '$10/hr', 'Angular.js', 'Javascript', 'Node.js', 'React', 'SQL', 'GitHub', 'Utah Valley University', 'DevMountain', null, 'BS Nursing', null, null), ('luis@gmail.com', 'password', 'Luis', 'Jones', 'Murray, Utah', null, 'React Tutor', 'I recently completed Dev Mountain''s Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.', '$15/hr', 'Angular.js', 'Javascript', 'Node.js', 'React', 'SQL', 'GitHub', 'Southern Utah University', 'DevMountain', null, 'BA Political Science', null, null), ('miriam@gmail.com', 'password', 'Miriam', 'Nelson', 'Orem, Utah', null, 'SQL Tutor', 'I recently completed Dev Mountain''s Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.', '$25/hr', 'Angular.js', 'Javascript', 'Node.js', 'React', 'SQL', 'GitHub', 'Brigham Young University', 'DevMountain', null, 'BS Mechanical Engineering', null, null), ('laura@gmail.com', 'password', 'Laura', 'Andrews', 'Alpine, Utah', null, 'Web Developer Tutor', 'I recently completed Dev Mountain''s Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.', '$20/hr', 'Angular.js', 'Javascript', 'Node.js', 'React', 'SQL', 'GitHub', 'Idaho State University', 'DevMountain', null, 'BA Humanities', null, null)


INSERT INTO reviews (studentfirstname, studentlastname, rating, review, tutor_id)
VALUES ('Cathleene', 'Monson', 'Excellent', 'Great experience. Tutor was responsible and an excellent communicator. Would hire again.', 1), ('Cathleene', 'Monson', 'Excellent', 'Great experience. Tutor was responsible and an excellent communicator. Would hire again.', 2), ('Cathleene', 'Monson', 'Excellent', 'Great experience. Tutor was responsible and an excellent communicator. Would hire again.', 3), ('Cathleene', 'Monson', 'Excellent', 'Great experience. Tutor was responsible and an excellent communicator. Would hire again.', 4), ('Cathleene', 'Monson', 'Excellent', 'Great experience. Tutor was responsible and an excellent communicator. Would hire again.', 5), ('Aaron', 'Smith', 'Poor', 'Terrible experience. Tutor was not responsible and was a poor communicator. Would not hire again.', 6), ('Aaron', 'Smith', 'Poor', 'Terrible experience. Tutor was not responsible and was a poor communicator. Would not hire again.', 7), ('Aaron', 'Smith', 'Poor', 'Terrible experience. Tutor was not responsible and was a poor communicator. Would not hire again.', 8), ('Aaron', 'Smith', 'Poor', 'Terrible experience. Tutor was not responsible and was a poor communicator. Would not hire again.', 1), ('Aaron', 'Smith', 'Poor', 'Terrible experience. Tutor was not responsible and was a poor communicator. Would not hire again.', 2), ('Aaron', 'Smith', 'Poor', 'Terrible experience. Tutor was not responsible and was a poor communicator. Would not hire again.', 3), ('Camry', 'Nelson', 'Average', 'Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts.', 4), ('Camry', 'Nelson', 'Average', 'Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts.', 5), ('Camry', 'Nelson', 'Average', 'Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts.', 6), ('Camry', 'Nelson', 'Average', 'Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts.', 7), ('Camry', 'Nelson', 'Average', 'Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts.', 8), ('Camry', 'Nelson', 'Average', 'Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts.', 1), ('Camry', 'Nelson', 'Average', 'Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts.', 2)
