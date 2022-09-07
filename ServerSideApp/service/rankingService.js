const {WriteNewScore} = require("./DBOps")


async function calculate_rank(score){
    // call dbops function to store score and get scores list
    let NewScoreList= await WriteNewScore(score)
    // declare object for finding the scores relation  to the given score
    let counts = {below : 0 , equal:0 ,above:0}
    NewScoreList.forEach(element => {
        counts[{'-1':'below' , 0:'equal' , 1:'above'}[Math.sign(element-score)]]++;  
    });
    // calculate rank based on the given eq.
    let rank = (counts.below / (NewScoreList.length-1))*100
    //return rank rounded to 2 decimal points
    return rank.toFixed(2)

}



// exports service to be able to use it in different directories
module.exports={
    calculate_rank
}