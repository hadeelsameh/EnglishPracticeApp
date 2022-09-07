const {readDB} = require("./DBOps");


// function takes wordslist and create 2d  array of classifed words based on 'pos' key
function ClassifyWords(wordList){
    // define sub arrays for each type of words
    let adjectives=[] ;
    let adverbs=[];
    let nouns=[];
    let verbs=[];
    // classify words
    for (let i=0 ; i<wordList.length ; i++) {
        switch(wordList[i].pos) {
            case 'adverb':
                adverbs.push(wordList[i])
                break;
            case 'adjective':
                adjectives.push(wordList[i])
                break;
            case 'verb':
                verbs.push(wordList[i])
                break;
            case 'noun':
                nouns.push(wordList[i])
                break;
            default:
                break;
        }   
    }
    // return 2d array of classified words
    return [adjectives,adverbs,verbs,nouns]
}



// function reurns the smaller of needed number of word and array length
function compare_needed_to_arr_length(needed , arrLength){

    if(needed <= arrLength){
        return needed
    }else{
        return arrLength
    }

}

// function uses Fisher-Yates algorithm to shufle the generated random list randomly
function shuffleList(arr){
    for(let i=(arr.length-1);i>0;i--){
        const j = Math.floor(Math.random()*(i+1));
        const temp = arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
    return arr
}

// function to generate randwordslist based of 2d classifed array and number of needed words per list
async function GetRandomWords(TotalRequiredLenth){
    //read db
    data= await readDB();
    // get classified 2d array
    let ClassifiedWordsList = ClassifyWords(data.wordList)
    let start;
    let end;
    // intializing the needed number of elements to be:(Total length required for random Wordlist)-(number of word classes -1)
    // in our case (10-3)
    let need = TotalRequiredLenth - (ClassifiedWordsList.length - 1);
    // declare rand word list
    let RandomWordList=[];
    let randomAmount;
    // for every category of words get random amount of elements with random indexs
    for (let i=0 ;i<ClassifiedWordsList.length;i++){
        
        //case of last category (make sure to return 10 elements)
        if((i+1)==ClassifiedWordsList.length){
            randomAmount = TotalRequiredLenth - RandomWordList.length
        }else{
            randomAmount = Math.floor(Math.random() * compare_needed_to_arr_length(need , ClassifiedWordsList[i].length))+1;
        }

        for (let k = 0; k <= randomAmount-1; k++) {
            let Index = Math.floor(Math.random() * (ClassifiedWordsList[i].length));
            RandomWordList.push(ClassifiedWordsList[i][Index]);
            //removing chosen words to prevent redundancy
            ClassifiedWordsList[i].splice(Index,1);
        }
        need = 10 - RandomWordList.length + ((i+1) - ClassifiedWordsList.length+1)
        
    }
    
    //suffle the array randomly
    RandomWordList = shuffleList(RandomWordList)

    //return generated array
    return RandomWordList
}


// exports service to be able to use it in different directories
module.exports={
    GetRandomWords
}