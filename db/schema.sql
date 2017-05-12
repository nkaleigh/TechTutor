DROP TABLE IF EXISTS tutors, reviews;


CREATE TABLE tutors
(
    id SERIAL PRIMARY KEY,
    email varchar(100),
    password (50),
    firstname varchar(50),
    lastname varchar(50),
    citystate varchar(50),
    picture_url TEXT,
    jobtitle varchar(50),
    bio TEXT(250),
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

CREATE TABLE reviews(
id SERIAL PRIMARY KEY,
studentfirstname varchar(50),
studentlastname varchar(50),
FOREIGN KEY(tutor_id)REFERENCEStutors(id),
rating varchar(50),
review TEXT(250)
);



INSERT INTO tutors (email, password, firstname, lastname, citystate, picture_url, jobtitle, bio, rate, skillone, skilltwo, skillthree, skillfour, skillfive, skillsix, schoolone, schooltwo, schoolthree, degreeone, degreetwo, degreethree)
VALUES ("kaleigh@gmail.com", "password", "Kaleigh", "Niemela", "Orem, Utah", "", "Web Developer Tutor", "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.", "$10/hr", "Angular.js", "Javascript", "Node.js", "React", "SQL", "GitHub", "Brigham Young University", "DevMountain", "", "BA English Linguistics", "", "", 3), ("christopher@gmail.com", "password", "Christopher", "Vosters", "Orem, Utah", "", "Javascript Tutor", "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.", "$10/hr", "Angular.js", "Javascript", "Node.js", "React", "SQL", "GitHub", "Brigham Young University", "DevMountain", "", "BA Philosphy", "", "", 4), ("oshion@gmail.com", "password", "Oshion", "Niemela", "Provo, Utah", "", "Python Tutor", "I am a current student at Brigham Young University. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.", "$20/hr", "Python", "Javascript", "Java", "C++", "SQL", "GitHub", "Brigham Young University", "BS Computer Science", "", "", 4), ("ed@gmail.com", "password", "Ed", "Smith", "Lindon, Utah", "", "Angular Tutor", "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.", "$12/hr", "Angular.js", "Javascript", "Node.js", "React", "SQL", "GitHub", "Utah State University", "DevMountain", "", "BS Biology", "", "", 2), ("anna@gmail.com", "password", "Anna", "Wright", "Springville, Utah", "", "Web Developer Tutor", "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.", "$10/hr", "Angular.js", "Javascript", "Node.js", "React", "SQL", "GitHub", "Utah Valley University", "DevMountain", "", "BS Nursing", "", "", 1), ("luis@gmail.com", "password", "Luis", "Jones", "Murray, Utah", "", "React Tutor", "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.", "$15/hr", "Angular.js", "Javascript", "Node.js", "React", "SQL", "GitHub", "Southern Utah University", "DevMountain", "", "BA Political Science", "", "", 4), ("miriam@gmail.com", "password", "Miriam", "Nelson", "Orem, Utah", "", "SQL Tutor", "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.", "$25/hr", "Angular.js", "Javascript", "Node.js", "React", "SQL", "GitHub", "Brigham Young University", "DevMountain", "", "BS Mechanical Engineering", "", "", 5), ("laura@gmail.com", "password", "Laura", "Andrews", "Alpine, Utah", "", "Web Developer Tutor", "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.", "$20/hr", "Angular.js", "Javascript", "Node.js", "React", "SQL", "GitHub", "Idaho State University", "DevMountain", "", "BA Humanities", "", "", 2), 


INSERT INTO reviews (studentfirstname, studentlastname, rating, review)
VALUES ("Cathleene", "Monson", "Excellent", "Great experience. Tutor was responsible and an excellent communicator. Would hire again."), ("Cathleene", "Monson", "Excellent", "Great experience. Tutor was responsible and an excellent communicator. Would hire again."), ("Cathleene", "Monson", "Excellent", "Great experience. Tutor was responsible and an excellent communicator. Would hire again."), ("Cathleene", "Monson", "Excellent", "Great experience. Tutor was responsible and an excellent communicator. Would hire again."), ("Cathleene", "Monson", "Excellent", "Great experience. Tutor was responsible and an excellent communicator. Would hire again."), ("Aaron", "Smith", "Poor", "Terrible experience. Tutor was not responsible and was a poor communicator. Would not hire again."), ("Aaron", "Smith", "Poor", "Terrible experience. Tutor was not responsible and was a poor communicator. Would not hire again."), ("Aaron", "Smith", "Poor", "Terrible experience. Tutor was not responsible and was a poor communicator. Would not hire again."), ("Aaron", "Smith", "Poor", "Terrible experience. Tutor was not responsible and was a poor communicator. Would not hire again."), ("Aaron", "Smith", "Poor", "Terrible experience. Tutor was not responsible and was a poor communicator. Would not hire again."), ("Aaron", "Smith", "Poor", "Terrible experience. Tutor was not responsible and was a poor communicator. Would not hire again."), ("Camry", "Nelson", "Average", "Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts."), ("Camry", "Nelson", "Average", "Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts."), ("Camry", "Nelson", "Average", "Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts."), ("Camry", "Nelson", "Average", "Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts."), ("Camry", "Nelson", "Average", "Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts."), ("Camry", "Nelson", "Average", "Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts."), ("Camry", "Nelson", "Average", "Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts.")
