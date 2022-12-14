INSERT INTO movies 
(movieName, releaseDate, studio, language, budget, sales, poster) 
VALUES ('The Count of Monte Cristo'), 
('Pacific Rim'), 
('Book of Eli'), 
('Intersteller'), 
('Glass')

INSERT INTO movies (plot)
VALUES (random_paragraph(50, 500))

movieName varchar(50),
  releaseDate varchar(20),
  studio varchar(50),
  language varchar(25),
  budget int,
  sales int
  plot text,
  poster text