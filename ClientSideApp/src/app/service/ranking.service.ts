import { Injectable } from '@angular/core';
import {HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { Observable ,throwError } from 'rxjs';
import {catchError , retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  score=0;
  readonly baseURL = 'http://localhost:3000/rank';

  constructor(private http : HttpClient) {

  }
  /*process post request*/
  postscore(score :number){
    return this.http.post(this.baseURL,{score:score})

  }
}
