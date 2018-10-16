import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Qualification } from '../models/Qualification';
import { Candidate } from '../models/Candidate';
import { TryCatchStmt } from '@angular/compiler';


const getQualificationsURL = 'http://192.168.7.98:3000/qualifications';
const postCandidateURL = 'http://192.168.7.98:3000/candidate';
var httpOptions = {headers: {}};

httpOptions.headers = { 'Content-Type':'application/json'};

/*const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: 'response'
};*/

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private httpClient: HttpClient) {
  }

  public getQualifications(): Observable<Qualification[]> {
    return this.httpClient.get<Qualification[]>(getQualificationsURL);
  }

  public postCandidate(candidate: Candidate): Observable<Object> {

    console.log('posting candidate to ' + postCandidateURL);
    return this.httpClient.post(postCandidateURL, candidate);
  }
}
