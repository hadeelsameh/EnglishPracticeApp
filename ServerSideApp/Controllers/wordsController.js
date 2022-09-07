const {GetRandomWords} = require("../service/wordsService");

/ cintroller to be run when request is sent to /practice
const getwordslistController = async (req , res)=>{

    let TotalRequiredLenth =10;
    // get random list of words objects from services    
    let RandomWordList = await GetRandomWords(TotalRequiredLenth)
    
    // reurn json response with the random words list
    res.json(
        RandomWordList
    )

}

// exports controller to be able to use it in different directories
module.exports={
    getwordslistController
}