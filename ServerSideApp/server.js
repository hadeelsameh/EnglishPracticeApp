const express = require('express');
const cors = require("cors");


const {RankingController} = require("./Controllers/rankController");
const {getwordslistController} = require("./Controllers/wordsController");

//library of parsing body data
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// instance of express 
const app = express()


//enableing use by angular app (middleware applied on all routes)
app.use(cors({origin:'http://localhost:4200'}));


// routes
app.get('/words', getwordslistController )
app.post('/rank', RankingController )


// listening on port 3000
app.listen(3000 ,()=>{console.log("server is listening:")})