import { Injectable } from '@angular/core';
import {HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { Observable ,throwError } from 'rxjs';
import {catchError , retry } from 'rxjs/operators';
import { WordsList } from '../model/words-list.model';

@Injectable({
  providedIn: 'root'
})
export class WordsService {
  readonly baseURL = 'http://localhost:3000/words';
  wordsList !: WordsList[] ;

  constructor(private http : HttpClient) { }
  /*process get request to get random words list*/
  getRandomWordsList(){
    return this.http.get(this.baseURL);
  }
}
