ALTER TABLE IF EXISTS castList DROP FOREIGN KEY;
ALTER TABLE IF EXISTS reviews DROP FOREIGN KEY;
DROP TABLE IF EXISTS castList;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS movies;



CREATE TABLE movies (
  id serial PRIMARY KEY,
  movieName varchar(255),
  releaseDate varchar(25),
  rating varchar(10),
  stars varchar(5),
  number_of_star_ratings varchar(10),
  runtime varchar(10),
  studio varchar(255),
  language varchar(255),
  budget text,
  globalsales text,
  plot text,
  poster text,
  trailer text
);

CREATE TABLE castList (
  cast_id SERIAL PRIMARY KEY,
  movie_id int NOT NULL,
  name VARCHAR(50),
  photo TEXT,
  character VARCHAR(50),
  FOREIGN KEY (movie_id) REFERENCES movies(id)
);

-- Review Table
CREATE TABLE reviews (
  review_id serial,
  username varchar(50),
  title varchar(100),
  revDate varchar(25),
  rating int,
  content TEXT,
  movie_id int NOT NULL,
  FOREIGN KEY (movie_id) REFERENCES movies(id)
);
