const fs = require("fs").promises;


DBName ="./TestData.json";

// Database operation are implemented here


// read db function 
async function readDB() {
    //use if package to read file 
    let Data = await fs.readFile(DBName);
    
    //return  json object of data
    return JSON.parse(Data);
}

// write new score takes score and store it scoresList and update database file
async function WriteNewScore(score) {
    //read db
    let DataObj = await readDB();
    // add score
    (DataObj.scoresList).push(score)
    // write updated data
    await fs.writeFile(DBName, JSON.stringify(DataObj))
    // return scoreslist array
    return DataObj.scoresList
}

// exports functions to be able to use it in different directories
module.exports={
    readDB,
    WriteNewScore
}