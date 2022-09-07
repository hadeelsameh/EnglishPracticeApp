import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

import { WordsService } from '../service/words.service';
import { WordsList } from '../model/words-list.model';
import { MatStepper } from '@angular/material/stepper';
import { MatDialog } from '@angular/material/dialog';
import { DialogeFeedbackComponent } from '../dialoge-feedback/dialoge-feedback.component';
import { Router } from '@angular/router';
import { RankingService } from '../service/ranking.service';
/* main component for /practice screen */
@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css'],
  providers:[WordsService]
})
export class PracticeComponent implements OnInit {

  isLinear = true;
  isEditable =false;
  words : string[] = [];
  answerChoices = ["adverb" , "adjective" , "noun", "verb"]
  totalCount=10;
  successCount=0;
  progress = 0;
  audio =new Audio();

  /*inject services*/
  constructor(public wordsService : WordsService,
             private _formBuilder: FormBuilder,
             public dialoge :MatDialog,
             public rankServeice : RankingService,
             private router :Router) {

  }

  ngOnInit(): void {

    /*get words ready when requesting actvity*/
    this.ProvideWordslist();


  }

  ProvideWordslist(){
    /* get random list (subscribe observable) */
    this.wordsService.getRandomWordsList().subscribe((res)=>{

      this.wordsService.wordsList=<WordsList[]>res;

      console.log(this.wordsService.wordsList)
      /*generate array of words for view usage*/
      this.preparewords(this.wordsService.wordsList)

    })

  }
/*generate array of words for view usage*/
  preparewords(word_list:WordsList[]){
    for(let i=0;i<this.totalCount;i++){
      this.words.push((word_list[i].word))

    }

  }
 /* function run when clicking any choice point*/
  checkAnswer(value:any , wordIndex:any){

    let word=this.words[wordIndex];
    let chosedClass =this.answerChoices[value]
    let answer;
    this.progress = ((wordIndex+1)/this.totalCount)*100


    let wordObject = this.wordsService.wordsList.filter(wordObject => wordObject.word == word)[0];
    console.log(wordObject)
    if(wordObject.pos == chosedClass){
        answer = "Correct"
        this.successCount = this.successCount +1

    }else{
      answer="InCorrect"
    }
    console.log(answer)
    /*open dialoge to show feedback*/
    this.dialoge.open(DialogeFeedbackComponent,{data:{answer:answer}})
    /*play audio based on corrrectness of answer*/
    if(answer == "Correct"){
      this.audio.src ='../../assets/CorrectAnswerSound.wav'
      this.audio.load();
      this.audio.play();

    }else{
      this.audio.src ='../../assets/WrongAnswerSound.wav'
      this.audio.load();
      this.audio.play();

    }
    /*if last elemnt rout to /rank and assign score*/
    if(wordIndex == (this.totalCount-1)){
      this.rankServeice.score=(this.successCount/this.totalCount)*100;
      this.router.navigate(['/rank'])

    }



  }




  /*build form*/
  firstFormGroup = this._formBuilder.group({
    firstCtrl: [''],
  });



}
