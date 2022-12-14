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

-- Review

INSERT INTO reviews(username, content) VALUES('StarGazer','Pitchfork hoodie praxis distillery pug seitan raw denim. Food truck raclette ugh hammock lomo tofu listicle cold-pressed yes plz meggings single-origin coffee in next level twee. Knausgaard fam authentic four loko. Blue bottle echo park glossier irony yr labore est affogato direct trade proident next level live-edge farm-to-table pinterest. Schlitz offal aliqua, irony JOMO direct trade hammock culpa kickstarter tousled aute poutine next level cred.',1),
('DreamWeaver','Tempor semiotics post-ironic squid flexitarian. Vibecession cardigan pop-up ullamco. Craft beer trust fund sustainable prism, dolor sint deserunt church-key hot chicken ut asymmetrical pitchfork mollit. DSA labore everyday carry cronut chartreuse, franzen biodiesel bruh leggings artisan pariatur hella XOXO. Migas beard kale chips messenger bag, organic narwhal pok pok asymmetrical nisi ipsum bushwick.',1),
('NightOwl','Keytar bicycle rights ut big mood edison bulb fit. Yuccie yes plz yr vape +1 swag fugiat minim magna poke est. Yes plz letterpress selvage raw denim YOLO Brooklyn yr dolor shoreditch, ipsum sint cillum aute eiusmod schlitz. Farm-to-table esse gastropub post-ironic. Beard ethical DIY slow-carb, bicycle rights shabby chic gatekeep laboris irony art party praxis tumblr. Gastropub banjo bruh readymade schlitz chillwave mixtape poke ipsum, tacos deep v godard.',1),
('MoonDancer','Bushwick beard yes plz messenger bag tonx, squid kombucha DSA banjo tumblr. Big mood franzen ramps sartorial. Eu cillum DIY hella knausgaard snackwave keffiyeh poke roof party velit. 90s distillery poke flexitarian flannel. Glossier excepteur etsy live-edge flannel hashtag pop-up small batch esse tacos gentrify copper mug cornhole.',1),
('SpaceInvader','Deep v tempor chillwave 3 wolf moon hell of swag yes plz microdosing try-hard pariatur shaman. Aliquip vegan squid poutine DSA. Gentrify knausgaard palo santo pickled af edison bulb. Cred aliquip mukbang ennui. Aute humblebrag roof party, nisi jianbing portland schlitz offal same 90s mumblecore velit la croix hexagon deserunt. Prism id bicycle rights, kinfolk in blog ullamco wolf qui pop-up celiac.',1),
('TheAdventurer','Im baby lumbersexual nulla enamel pin mollit chicharrones jianbing Brooklyn. Fam cred 8-bit prism tousled letterpress. Aliquip schlitz keffiyeh, succulents actually aesthetic everyday carry. Mixtape beard pok pok 90s.',1),
('TheImaginative','Ramps blog lorem la croix, palo santo tacos excepteur biodiesel. Laborum jianbing keytar celiac chillwave. Subway tile roof party tempor master cleanse, hexagon man braid consectetur kogi hammock praxis exercitation glossier. Typewriter XOXO affogato anim cronut, tumblr culpa williamsburg next level disrupt asymmetrical. Raw denim duis raclette palo santo austin yr voluptate jianbing meggings enamel pin. Pop-up seitan chartreuse ennui, labore copper',1),
('MoonBeam','Neutra do glossier trust fund, artisan sint fit ut DIY tbh. Ennui meh beard, tumeric selfies cornhole edison bulb church-key succulents. Whatever non microdosing enim, drinking vinegar tousled meggings bitters lomo disrupt street art pop-up tumeric live-edge.',1),
('DreamWalker','Im baby la croix heirloom mustache duis. Master cleanse keffiyeh banh mi viral enamel pin. Iceland ut drinking vinegar, copper mug williamsburg pok pok ramps ipsum actually jean shorts vibecession dreamcatcher. Authentic ascot hashtag heirloom officia synth succulents asymmetrical meditation.',1),
('NightBloom','You probably havent heard of them XOXO godard pour-over big mood, kinfolk incididunt typewriter palo santo hella chillwave labore. Magna single-origin coffee air plant, photo booth aute asymmetrical gentrify sus letterpress brunch paleo veniam. Qui copper mug deep v yuccie edison bulb 90s vice magna kogi neutra direct trade. Kinfolk forage etsy sriracha, sustainable adaptogen kombucha DSA paleo farm-to-table cloud bread.',1),
('StarSearcher','Man bun tote bag kitsch, subway tile bodega boys eiusmod eu edison bulb unicorn af mustache master cleanse meditation. Raw denim organic sartorial JOMO dolore reprehenderit tempor vape offal unicorn. Health goth humblebrag elit meggings quinoa la croix kombucha deserunt lyft banjo locavore. Brooklyn chillwave glossier dolore, poke biodiesel portland big mood seitan kinfolk voluptate scenester. Hoodie sartorial ipsum, succulents tumeric polaroid hammock sunt enamel pin chia aesthetic health goth.',1),
('SpaceOddity','Exercitation polaroid ad man bun. Letterpress beard distillery chicharrones air plant trust fund typewriter man braid synth ut esse chambray skateboard locavore wolf.',1),
('TheMystical','Lumbersexual raclette YOLO anim tilde, beard fashion axe bitters. Literally pork belly sint tbh subway tile mollit in butcher raw denim. Gastropub hammock unicorn, aesthetic deserunt irony hashtag biodiesel whatever prism mixtape do wayfarers velit.',1),
('TheSurreal','Veniam bruh tousled intelligentsia in, kale chips fam. Id ascot kitsch franzen do 8-bit. Et gastropub gentrify, offal mixtape master cleanse aliquip irony portland affogato bodega boys activated charcoal hell of artisan pariatur. Literally est cornhole paleo gastropub schlitz.',1),
('TheImaginative','Ipsum asymmetrical hell of umami Brooklyn officia church-key. Normcore sus salvia pour-over kitsch. Wayfarers ugh coloring book four loko id, excepteur hammock XOXO reprehenderit est. Labore twee hoodie pariatur copper mug seitan excepteur air plant ea vape aliquip.',1),
('TheIntriguing','Paleo small batch reprehenderit tofu quis heirloom ugh yuccie tote bag pinterest ascot. Ipsum mukbang twee cold-pressed voluptate ramps bushwick letterpress in photo booth cillum.',1),
('TheUnpredictable','Pour-over plaid post-ironic blue bottle exercitation asymmetrical kickstarter eu aliqua excepteur succulents officia af chambray small batch. Knausgaard coloring book tonx, dreamcatcher af 3 wolf moon PBR&B anim labore flannel veniam yr messenger bag fixie mixtape. Affogato offal seitan ea mixtape exercitation qui distillery, big mood meggings freegan.',1),
('TheWhimsical','Laborum everyday carry forage lumbersexual viral bruh, squid sus. Qui quinoa mumblecore cold-pressed officia tempor et, non meh ut shabby chic intelligentsia photo booth la croix vegan. Aute cornhole schlitz, mumblecore ex labore twee bicycle rights. Taiyaki whatever glossier sriracha next level.',1),
('TheInsightful','Quis aesthetic praxis anim. 8-bit praxis snackwave seitan next level. Quinoa meggings offal art party. Wolf in messenger bag yes plz labore hexagon pitchfork four loko cronut.',1),
('TheSurreal','Palo santo qui synth lomo, venmo bitters ipsum skateboard four dollar toast mollit gluten-free narwhal cold-pressed cronut. Aliquip 3 wolf moon esse truffaut magna big mood PBR&B. Paleo before they sold out nostrud, ethical lumbersexual pabst laborum sustainable snackwave lyft dolor eu forage asymmetrical sus.',1),
('TheMysterious','Aesthetic mlkshk tumeric ex trust fund, cred butcher affogato minim asymmetrical live-edge slow-carb keffiyeh blue bottle. Chambray blog sustainable, exercitation selvage labore lo-fi fit. Tumblr gochujang food truck lumbersexual, hella helvetica swag gatekeep fugiat ad you probably havent heard of them. Next level taiyaki selvage chicharrones church-key messenger bag poke.',1),
('TheFascinating','Cupidatat cornhole authentic paleo freegan salvia adipisicing. 90s glossier sriracha craft beer slow-carb butcher et food truck tonx id tbh. Photo booth helvetica fashion axe echo park mollit. Palo santo big mood art party wayfarers church-key do',1),
('TheEnchanting','Cupidatat wayfarers tumeric neutra praxis polaroid YOLO franzen palo santo. Gochujang +1 occaecat celiac you probably havent heard of them ascot ad raclette dolor microdosing photo booth glossier vegan vexillologist. Fugiat chicharrones occupy yuccie adipisicing aliqua.',1),
('TheCaptivating','Pariatur post-ironic direct trade slow-carb, voluptate franzen taxidermy artisan officia. Hammock subway tile flannel, retro typewriter chia put a bird on it franzen ad cray kickstarter aliqua slow-carb williamsburg dolor. Tacos aute poutine yr four dollar toast flexitarian paleo fingerstache banh mi. ',1),
('TheExotic','Lyft dreamcatcher activated charcoal pour-over kinfolk raclette reprehenderit twee keytar anim officia schlitz eiusmod. Squid hoodie godard blue bottle. Cornhole retro yr sustainable. Ipsum cred ennui viral, health goth enamel pin ad bushwick cillum literally vinyl.',1),
('TheIntriguing','Hashtag meh everyday carry paleo cred, before they sold out do viral austin. Listicle offal drinking vinegar typewriter, mumblecore readymade eiusmod qui gluten-free mukbang beard bespoke consectetur. Keffiyeh austin sed blue bottle, laborum art party palo santo sus messenger bag. ',1),
('TheEnigmatic','Marfa asymmetrical est sunt nisi voluptate tumeric vegan hot chicken. Cupidatat plaid kitsch dolore keffiyeh, williamsburg shaman post-ironic anim.',1),
('TheMystical','Ascot gluten-free fam, salvia wayfarers commodo ethical tumblr meditation chillwave food truck cardigan irony sartorial live-edge. Commodo drinking vinegar banjo letterpress chillwave marfa VHS echo park +1 franzen taxidermy thundercats hella. Mollit live-edge mustache ascot.',1),
('TheEnchanting','Lyft flexitarian nostrud ramps blue bottle intelligentsia, enim shoreditch cronut vape truffaut semiotics magna. Cred photo booth ipsum hashtag, nostrud tattooed skateboard. Paleo fanny pack asymmetrical adipisicing, JOMO everyday carry subway tile iceland cloud bread pickled gluten-free messenger bag irony elit.',1),
('TheExotic','Adipisicing paleo humblebrag lo-fi. Intelligentsia organic vice, sriracha keytar affogato aute 3 wolf moon. Gastropub dreamcatcher tote bag consectetur praxis. Lorem dolore mustache, big mood gatekeep man bun cred hoodie. Kombucha pork belly consectetur intelligentsia church-key tempor ad kale chips typewriter pabst four loko shoreditch Brooklyn commodo keytar.',1),
('TheMysterious','Meditation four dollar toast mustache labore cupidatat, adipisicing wolf skateboard gatekeep yes plz jianbing air plant. Plaid same organic listicle lyft pinterest keytar, health goth blog normcore JOMO mollit small batch.',1),
('TheFascinating','Aute dolor glossier keytar af bodega boys distillery ascot polaroid bruh mumblecore. Offal food truck in air plant pinterest. Dolore in freegan portland. Hella live-edge officia bruh. Disrupt farm-to-table keffiyeh echo park vexillologist organic sustainable kombucha kickstarter man braid distillery forage pug fugiat. Iceland artisan waistcoat lyft tbh godard.',1),
('TheCaptivating','Selfies post-ironic narwhal id irony ut mumblecore bodega boys et YOLO mollit humblebrag. Schlitz plaid vibecession, hoodie duis qui microdosing portland tacos distillery freegan semiotics offal kitsch occaecat. Tousled craft beer ethical, lo-fi distillery fingerstache unicorn tofu ad. 90s four loko marfa biodiesel freegan voluptate quis cupidatat.',1),
('TheIntriguing','Meditation four dollar toast mustache labore cupidatat, adipisicing wolf skateboard gatekeep yes plz jianbing air plant. Plaid same organic listicle lyft pinterest keytar, health goth blog normcore JOMO mollit small batch. Laborum chillwave lumbersexual, quis pabst retro offal post-ironic enamel pin street art',1),
('TheEnigmatic','Heirloom church-key non af gochujang. Vegan street art voluptate +1, shaman palo santo id fingerstache dolore kitsch nostrud hoodie. Before they sold out ascot adipisicing same helvetica dreamcatcher offal. Seitan labore freegan, reprehenderit voluptate organic truffaut hell of tilde trust fund bodega boys adipisicing 8-bit.',1),
('TheMystical','Wolf kickstarter ramps tumeric tousled. Ipsum kinfolk try-hard, ea seitan vexillologist duis migas asymmetrical tousled. Disrupt fanny pack pitchfork hella next level. Typewriter hoodie gatekeep excepteur, chicharrones quis yes plz health goth et dreamcatcher ad qui paleo. Shoreditch austin hexagon vinyl, woke stumptown asymmetrical try-hard banh mi.',1),
('TheEnchanting','Wolf migas succulents, ramps schlitz yes plz banh mi blue bottle nulla 3 wolf moon brunch YOLO. Bodega boys banh mi kitsch, banjo la croix fam 8-bit chillwave tbh elit live-edge commodo. Prism seitan eu nostrud praxis, dreamcatcher cardigan cray tumblr slow-carb ugh small batch meh.',1),
('TheExotic','Est readymade sed, venmo jean shorts consequat succulents YOLO tumblr taxidermy listicle. Taxidermy distillery health goth, next level pour-over chambray quinoa bruh organic exercitation affogato celiac. Health goth dreamcatcher consectetur, occaecat typewriter you probably havent heard of them poutine hell of 90s ut godard enamel pin proident shoreditch ad.',1),
('TheMysterious','Esse big mood elit franzen +1 live-edge keytar fanny pack tousled iceland humblebrag. Bodega boys taiyaki fashion axe 8-bit locavore, JOMO fixie mlkshk duis iceland. Freegan ramps butcher tousled retro bespoke.',1),
('TheFascinating','Gluten-free vegan banh mi whatever, chambray glossier you probably havent heard of them readymade hella 8-bit seitan selvage sus enim yes plz. Sustainable aute keffiyeh, prism gatekeep praxis wayfarers eu authentic brunch bicycle rights subway tile letterpress copper mug. Kitsch irony iceland chia tote bag in. 8-bit ut mixtape voluptate.',1),
('SpaceExplorer','Post-ironic disrupt hexagon, gastropub knausgaard pok pok magna banh mi seitan mlkshk nulla. Bruh keytar meditation tote bag. Salvia bitters green juice tbh shaman single-origin coffee raw denim nisi kombucha.',1),
('Dreamer','Hexagon aliqua farm-to-table shabby chic vape taiyaki elit authentic duis retro. Bicycle rights velit PBR&B hella dolore fugiat lumbersexual roof party. Ex veniam quinoa, deep v tousled occupy cloud bread meditation gluten-free shabby chic brunch flannel fingerstache disrupt.',1),
('Nightingale','Hella lorem migas vape pug seitan trust fund, readymade lomo duis flannel distillery. Celiac vinyl crucifix bruh. Quinoa fashion axe palo santo, occaecat meh deserunt butcher. YOLO tumeric ramps occaecat. Prism kogi plaid, iceland distillery forage edison bulb et beard.',1),
('TheCreator','Chambray 90s tumblr ennui tonx live-edge voluptate messenger bag PBR&B fingerstache waistcoat retro coloring book umami air plant. Lyft craft beer consequat vibecession nisi pitchfork sint.',1),
('TheStrategist','Poke ut big mood neutra put a bird on it qui celiac taiyaki fanny pack gastropub normcore pabst kale chips ugh. Chartreuse chillwave farm-to-table williamsburg woke elit reprehenderit roof party ramps offal officia deserunt ipsum JOMO. Cronut tattooed butcher cred, aesthetic big mood exercitation brunch magna.',1),
('ThePioneer','Kogi bushwick next level la croix kale chips, marfa Brooklyn wolf retro fanny pack palo santo. Gentrify synth velit, DSA aliquip trust fund man bun live-edge dolore 3 wolf moon bicycle rights freegan aliqua. Poke VHS DIY, voluptate elit hexagon pork belly tumeric crucifix ramps labore chicharrones.',1),
('TimeWarp','Polaroid pork belly est culpa banjo pariatur normcore. Commodo laborum marfa bodega boys man braid in incididunt. Cornhole activated charcoal jean shorts listicle disrupt ea kale chips velit letterpress distillery excepteur YOLO banh mi.',1),
('StarShooter','Master cleanse four dollar toast tumeric leggings dolore intelligentsia. Vice disrupt tote bag keffiyeh polaroid, pork belly portland single-origin coffee pabst. Fit selfies mollit ut id chia bodega boys. Et ipsum plaid, gentrify af yuccie food truck whatever fixie seitan bespoke JOMO deserunt.',1),
('MoonDazzle',' Kickstarter bodega boys la croix four dollar toast pour-over fixie kale chips typewriter meggings. Man braid health goth subway tile, locavore ea green juice quis jianbing dreamcatcher blue bottle. Ullamco magna shabby chic truffaut farm-to-table.',1),
('SpaceAge','Adipisicing roof party tattooed, DSA occaecat mustache twee coloring book selvage mlkshk est. Ea craft beer venmo scenester adaptogen cardigan tofu veniam selvage roof party art party organic. Taxidermy minim tacos, gastropub poke butcher whatever. Chicharrones cornhole offal typewriter ut bitters.',1),
('Dreamweaver','Vegan DIY green juice incididunt gochujang, semiotics ramps organic yuccie celiac plaid kitsch officia pariatur. Poke roof party distillery taiyaki, mukbang typewriter tacos salvia. Trust fund tacos hashtag you probably havent heard of them food truck viral, yes plz woke cupidatat ut williamsburg tofu gatekeep proident aliqua.',1),
('TheCryptic','Iceland before they sold out asymmetrical in kinfolk bicycle rights etsy franzen gastropub food truck selfies pitchfork. Aliquip pug fanny pack dreamcatcher raclette, Brooklyn helvetica gentrify mixtape yuccie unicorn crucifix irony ut.', 1),
('TheWhimsical','Tbh shabby chic mumblecore, YOLO ugh kombucha food truck. DIY austin magna raclette humblebrag, dolore beard ramps same elit. Butcher nulla occupy four loko seitan lorem. Gentrify ugh narwhal vibecession everyday carry, YOLO keffiyeh microdosing distillery.', 1),
('TheMindful','Cray next level intelligentsia bitters raw denim. Ascot helvetica irony keffiyeh DSA iPhone. Affogato wayfarers tempor, poutine magna fashion axe vaporware mumblecore pug. Anim brunch vegan portland jean shorts.', 1),
('TheMystical','Celiac deserunt single-origin coffee prism. In pinterest velit hoodie freegan kombucha crucifix tacos big mood pickled enamel pin. Enim veniam pug, wolf fixie chambray celiac. Minim unicorn quis incididunt trust fund.', 1),
('TheUnpredictable','Mollit ut roof party, flannel mixtape aliqua small batch vice velit nisi literally pinterest four dollar toast normcore. 90s vice helvetica consequat coloring book, air plant small batch. Lyft fam aliqua intelligentsia messenger bag butcher aliquip, small batch ea drinking vinegar.', 1),
('TheFantastical','Beard pork belly leggings minim, la croix mlkshk sunt jianbing poutine raclette cardigan pariatur unicorn tofu asymmetrical. Af pok pok XOXO minim nisi mollit, jean shorts cray pop-up wayfarers. Aute enamel pin four loko consequat bitters ea shaman mustache pinterest put a bird on it hoodie blog synth next level whatever.', 1),
('TheCryptic','Semiotics occaecat blue bottle ea narwhal est. Church-key bitters activated charcoal, magna echo park ipsum hoodie truffaut microdosing fixie heirloom helvetica flannel coloring book. Occaecat cold-pressed seitan irure, typewriter chicharrones flannel af. 90s air plant cillum cornhole raw denim actually humblebrag glossier Brooklyn. ', 1),
('TheWhimsical','Listicle gatekeep slow-carb synth celiac coloring book twee, hammock portland iPhone disrupt. Man braid affogato tilde keffiyeh. Mustache fashion axe migas consectetur dreamcatcher gentrify. Cardigan proident vinyl tumeric, keytar flexitarian non meggings.', 1),
('TheImaginative','Quis hashtag tote bag iPhone stumptown lumbersexual chillwave typewriter pop-up marfa ullamco iceland VHS jean shorts. Gastropub twee XOXO fam. Keytar tonx ut irure shoreditch, vegan duis edison bulb dolore. Fingerstache austin la croix, tilde copper mug bitters enim adaptogen.', 1),
('TheCryptic','Tattooed aliqua ut wolf plaid qui succulents vegan twee post-ironic, quinoa mukbang try-hard 3 wolf moon duis. Ethical sus godard gluten-free, keytar chicharrones jianbing cold-pressed.', 1),









//Cast info for Count of Monte Cristo
  INSERT INTO cast (name, character, movie_id, photo)
VALUES ('Jim Caviezel', 'Edmond', 1, 'https://m.media-amazon.com/images/M/MV5BMTc2Nzk0MTY4MV5BMl5BanBnXkFtZTcwMjA3NTY5Mg@@._V1_QL75_UY207_CR3,0,140,207_.jpg'),
       ('Guy Pearce', 'Fernand', 1, 'https://m.media-amazon.com/images/M/MV5BMTgyNzc2NzY3Nl5BMl5BanBnXkFtZTgwNTMzMzAwMjE@._V1_QL75_UX140_CR0,1,140,207_.jpg'),
       ('Christopher Adamson', 'Maurice', 1, 'https://m.media-amazon.com/images/M/MV5BMTAwMDAyNTc2ODleQTJeQWpwZ15BbWU3MDk5NTQ0MDg@._V1_QL75_UY207_CR2,0,140,207_.jpg'),
       ('JB Blanc', 'Luigi Vampa', 1, 'https://m.media-amazon.com/images/M/MV5BMGJmOTM5MjQtMWUzOC00NzUxLThmMTctZTc2ZWVlNzkxYjg4XkEyXkFqcGdeQXVyMTM2MzA2NA@@._V1_QL75_UX140_CR0,1,140,207_.jpg'),
       ('Guy Carleton', 'Mansion Owner', 1, 'https://m.media-amazon.com/images/M/MV5BYzYwZTdlYWItZmMyNi00ZmRkLThhYTItYWNhYzI4ZDU3MmU5XkEyXkFqcGdeQXVyMTExMTc3NzU5._V1_QL75_UY207_CR3,0,140,207_.jpg'),
       ('Barry Cassin', 'Old Man Dantes', 1),
       ('Henry Cavill', 'Albert Mondego', 1, 'https://m.media-amazon.com/images/M/MV5BODI0MTYzNTIxNl5BMl5BanBnXkFtZTcwNjg2Nzc0NA@@._V1_QL75_UY207_CR17,0,140,207_.jpg'),
       ('Briana Corrigan', 'Casino Prostitute', 1),
       ('Brendan Costello', 'Viscount', 1),
       ('Mairead Devlin', 'Partygoer No. 2(as Maireid Devlin)', 1),
       ('Dagmara Dominczyk', 'Mercedes', 1, 'https://m.media-amazon.com/images/M/MV5BMTIzOTMzMTg5NV5BMl5BanBnXkFtZTYwODIzMDEz._V1_QL75_UY207_CR13,0,140,207_.jpg'),
       ('Stella Feeley', 'Partygoer No. 3', 1),
       ('James Frain', 'Villefort', 1, 'https://m.media-amazon.com/images/M/MV5BYWY3NTc5YWQtN2JjZS00Yjc2LThlZTEtMTQwNmY5MTQxY2QzXkEyXkFqcGdeQXVyNDcyMTkwOQ@@._V1_QL75_UY207_CR31,0,140,207_.jpg'),
       ('Patrick Godfrey', 'Morrell', 1, 'https://m.media-amazon.com/images/M/MV5BMTQwNzU0MTUxMl5BMl5BanBnXkFtZTcwNjc4OTkwOA@@._V1_QL75_UX140_CR0,12,140,207_.jpg'),
       ('Luis Guzmán', 'Jacopo(as Luis Guzman)', 1, 'https://m.media-amazon.com/images/M/MV5BNzYyNjIyOTU2NF5BMl5BanBnXkFtZTcwODk3ODcxMw@@._V1_QL75_UY207_CR1,0,140,207_.jpg'),
       ('Joe Hanley', 'Partygoer No. 1', 1),
       ('Richard Harris', 'Abbe Faria', 1, 'https://m.media-amazon.com/images/M/MV5BMTgzNTA5ODg1NV5BMl5BanBnXkFtZTcwMDU3MTU5Mw@@._V1_QL75_UY207_CR8,0,140,207_.jpg'),
       ('Katherine Holme', 'Julianne', 1);
