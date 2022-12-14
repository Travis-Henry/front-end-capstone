DROP TABLE IF EXISTS movies;

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