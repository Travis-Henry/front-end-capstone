DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
  id serial,
  movieName varchar(255),
  releaseDate date,
  studio varchar(255),
  language varchar(255),
  budget numeric,
  globalsales numeric,
  plot text,
  poster text
);
