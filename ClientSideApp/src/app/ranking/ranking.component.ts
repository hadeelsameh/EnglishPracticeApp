import { Component, OnInit } from '@angular/core';
import { RankingService } from '../service/ranking.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})

/*main component for ranking*/
export class RankingComponent implements OnInit {
  /*inject services*/
  constructor(public rankService :RankingService,
              private router :Router) { }

  score=this.rankService.score;
  rank !:string;

  ngOnInit(): void {

    this.getrank();
  }
  /*subscribe to observable to post score and get rank*/
  getrank(){
    this.rankService.postscore(this.score).subscribe((res)=>{

      this.rank=<string>res;

    })
  }

  /*try again button on click invokes this method*/
  goToPractice(){
    this.router.navigate(['/practice'])
  }

}
