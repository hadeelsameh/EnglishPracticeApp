const {calculate_rank} = require("../service/rankingService");



// Controller to be run for /rank  route
const RankingController = async (req,res)=>{

    // get the score passed in the body of the request and cast it to number
    let score =parseInt(req.body.score);
    
    // pass score (The socre of requesting student) that calculates rank and savescore in scoresList
    let rank = await calculate_rank(score)
    // return json response with rank
    res.json(
        rank
    )   
}


// exports controller to be able to use it in different directories
module.exports={
    RankingController
}
