DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS reviews;


CREATE TABLE movies (
  id serial,
  movieName varchar(50),
  releaseDate varchar(20),
  studio varchar(50),
  language varchar(25),
  budget int,
  sales int
  plot text,
  poster
);

-- Review Table
CREATE TABLE reviews (
  review_id serial,
  username varchar(50),
  content TEXT,
  movies_id FOREIGN KEY
);
