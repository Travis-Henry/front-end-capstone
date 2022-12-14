
-- Movie data info
INSERT INTO movies (movieName, releaseDate, studio, language, budget, globalsales, plot, poster)
VALUES 
('The Count of Monte Cristo', '2002-01-25', 'Touchstone Pictures', 'English', '100000', '1000000', 'In 19th-century France, a sailor falsely imprisoned for murder envisions a plan for revenge.', NULL),
('Pacific Rim', '2013-07-12', 'Legendary Pictures', 'English', '190000000', '410500000', 'As a war between humankind and monstrous sea creatures wages on, a former pilot and a trainee are paired up to drive a seemingly obsolete special weapon in a desperate effort to save the world from the apocalypse.', NULL),
('Book of Eli', '2010-01-14', 'Alcon Entertainment', 'English', '80000000', '157000000', 'A post-apocalyptic tale, in which a lone man fights his way across America in order to protect a sacred book that holds the secrets to saving humankind.', NULL),
('Interstellar', '2014-11-05', 'Paramount Pictures', 'English', '165000000', '670000000', 'A team of explorers travel through a wormhole in space in an attempt to ensure the survival of humanity.', NULL),
('Glass', '2019-01-16', 'Buena Vista Pictures', 'English', '20000000', '24900000', 'Security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities.', NULL)



-- Cast info for Count of Monte Cristo
INSERT INTO castList (name, character, movie_id, photo)
VALUES ('Jim Caviezel', 'Edmond', 1, 'https://m.media-amazon.com/images/M/MV5BMTc2Nzk0MTY4MV5BMl5BanBnXkFtZTcwMjA3NTY5Mg@@._V1_QL75_UY207_CR3,0,140,207_.jpg'),
       ('Guy Pearce', 'Fernand', 1, 'https://m.media-amazon.com/images/M/MV5BMTgyNzc2NzY3Nl5BMl5BanBnXkFtZTgwNTMzMzAwMjE@._V1_QL75_UX140_CR0,1,140,207_.jpg'),
       ('Christopher Adamson', 'Maurice', 1, 'https://m.media-amazon.com/images/M/MV5BMTAwMDAyNTc2ODleQTJeQWpwZ15BbWU3MDk5NTQ0MDg@._V1_QL75_UY207_CR2,0,140,207_.jpg'),
       ('JB Blanc', 'Luigi Vampa', 1, 'https://m.media-amazon.com/images/M/MV5BMGJmOTM5MjQtMWUzOC00NzUxLThmMTctZTc2ZWVlNzkxYjg4XkEyXkFqcGdeQXVyMTM2MzA2NA@@._V1_QL75_UX140_CR0,1,140,207_.jpg'),
       ('Guy Carleton', 'Mansion Owner', 1, 'https://m.media-amazon.com/images/M/MV5BYzYwZTdlYWItZmMyNi00ZmRkLThhYTItYWNhYzI4ZDU3MmU5XkEyXkFqcGdeQXVyMTExMTc3NzU5._V1_QL75_UY207_CR3,0,140,207_.jpg'),
       ('Barry Cassin', 'Old Man Dantes', 1, NULL),
       ('Henry Cavill', 'Albert Mondego', 1, 'https://m.media-amazon.com/images/M/MV5BODI0MTYzNTIxNl5BMl5BanBnXkFtZTcwNjg2Nzc0NA@@._V1_QL75_UY207_CR17,0,140,207_.jpg'),
       ('Briana Corrigan', 'Casino Prostitute', 1, NULL),
       ('Brendan Costello', 'Viscount', 1, NULL),
       ('Mairead Devlin', 'Partygoer No. 2(as Maireid Devlin)', 1, NULL),
       ('Dagmara Dominczyk', 'Mercedes', 1, 'https://m.media-amazon.com/images/M/MV5BMTIzOTMzMTg5NV5BMl5BanBnXkFtZTYwODIzMDEz._V1_QL75_UY207_CR13,0,140,207_.jpg'),
       ('Stella Feeley', 'Partygoer No. 3', 1, NULL),
       ('James Frain', 'Villefort', 1, 'https://m.media-amazon.com/images/M/MV5BYWY3NTc5YWQtN2JjZS00Yjc2LThlZTEtMTQwNmY5MTQxY2QzXkEyXkFqcGdeQXVyNDcyMTkwOQ@@._V1_QL75_UY207_CR31,0,140,207_.jpg'),
       ('Patrick Godfrey', 'Morrell', 1, 'https://m.media-amazon.com/images/M/MV5BMTQwNzU0MTUxMl5BMl5BanBnXkFtZTcwNjc4OTkwOA@@._V1_QL75_UX140_CR0,12,140,207_.jpg'),
       ('Luis Guzmán', 'Jacopo(as Luis Guzman)', 1, 'https://m.media-amazon.com/images/M/MV5BNzYyNjIyOTU2NF5BMl5BanBnXkFtZTcwODk3ODcxMw@@._V1_QL75_UY207_CR1,0,140,207_.jpg'),
       ('Joe Hanley', 'Partygoer No. 1', 1, NULL),
       ('Richard Harris', 'Abbe Faria', 1, 'https://m.media-amazon.com/images/M/MV5BMTgzNTA5ODg1NV5BMl5BanBnXkFtZTcwMDU3MTU5Mw@@._V1_QL75_UY207_CR8,0,140,207_.jpg'),
       ('Katherine Holme', 'Julianne', 1, NULL);