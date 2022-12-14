ALTER TABLE IF EXISTS castList DROP FOREIGN KEY;
DROP TABLE IF EXISTS castList;
DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS reviews;


CREATE TABLE movies (
  id serial PRIMARY KEY,
  movieName varchar(255),
  releaseDate date,
  studio varchar(255),
  language varchar(255),
  budget numeric,
  globalsales numeric,
  plot text,
  poster text
);

<<<<<<< HEAD
CREATE TABLE castList (
  cast_id SERIAL PRIMARY KEY,
  movie_id int NOT NULL,
  name VARCHAR(50),
  photo TEXT,
  character VARCHAR(50),
  FOREIGN KEY (movie_id) REFERENCES movies(id)
);
=======
<<<<<<< HEAD
-- Review Table
CREATE TABLE reviews (
  review_id serial,
  username varchar(50),
  content TEXT,
  movies_id FOREIGN KEY
);
=======
CREATE TABLE cast(
  cast_id SERIAL,
  name VARCHAR(50),
  photo TEXT,
  character VARCHAR(50),
  movie_id FOREIGN KEY
);
>>>>>>> dev
>>>>>>> dev
