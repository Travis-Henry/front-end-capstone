const express = require('express');
const {Pool} = require('pg');
const cors = require('cors');

const config = require('./config')[process.env.NODE_ENV || 'dev'];
const pool = new Pool({
    connectionString: config.connectionString
});
pool.connect();

const app = express();
const PORT = config.port;
app.use(cors());
app.use(express.json());

//Get movie data route
app.get('/movie/:id', (req, res, next)=>{

    let movie = {}

    //First query to get movie
    pool.query(`SELECT * FROM movies WHERE id = ${req.params.id}`)
    .then(results=>{

        //Second query to get reviews
        pool.query(`SELECT * FROM reviews WHERE movie_id = ${req.params.id}`)
        .then(reviews=>{

            //Third query to get cast
            pool.query(`SELECT * FROM castList WHERE movie_id = ${req.params.id}`)
            .then(cast=>{
                

                movie = {...results.rows[0], reviews: [...reviews.rows], cast:[...cast.rows] }
                res.send(movie);
            })
            .catch(error=>next({status:500, message:"Server Error"}));
        })
        .catch(error=>next({status:500, message:"Server Error"}));
    })
    .catch(error=>next({status:400, message:"Bad request"}));
});

//Get all movies
app.get('/movie', (req, res, next)=>{

    pool.query(`SELECT * FROM movies`)
    .then(results=>{
        res.send(results.rows); 
    })
    .catch(error=>next({status:400, message:"Bad request"}));
});


//Error handler
app.use((err, req, res, next)=>{
    res.status(err.status).send(err.message);
})

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
});